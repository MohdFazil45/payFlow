import "dotenv/config";
import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import { usersTable } from "@repo/db";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  try {
    const { number, name, password } = req.body;

    const existingUser = await usersTable.findOne({
      number: number,
    });

    if (existingUser) {
      return res.status(409).json({
        error: "User already exist",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (!hashedPassword) {
      return res.status(403).json({
        error: "Password not hashed",
      });
    }

    const response = await usersTable.create({
      number: number,
      name: name,
      password: hashedPassword,
    });

    res.status(201).json({
      msg: "Users registered succesfully",
      data: {
        name: response?.name,
        id: response?._id,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" })

  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    const { number, password } = req.body;

    const [user] = await usersTable.find({
      number: number,
    });

    if (!user) {
      return res.status(401).json({
        error: "user not exists",
      });
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      return res.status(401).json({
        error: "Incorrect credentials",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
      },
      process.env.JWT_SECRET!,
    {expiresIn:"7d"});

    res.cookie("token", token);

    res.status(200).json({
      msg: "Logged In succesfully",
    });
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Internal server error" })
  }
};
