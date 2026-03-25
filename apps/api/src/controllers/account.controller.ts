import { accountTable, usersTable } from "@repo/db";
import { PaymentSchema } from "@repo/zodschema";
import type { Request, Response } from "express";
import mongoose from "mongoose";

export const checkBalance = async (req: Request, res: Response) => {
  try {
    const userId = req.user?._id;
    const account = await accountTable.findOne({
      userId: userId,
    });

    if (!account) {
      return res.status(404).json({
        error: "Account not found",
      });
    }

    res.status(200).json({
      balance: account.balance,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error: "Server error",
    });
  }
};

export const transfer = async (req: Request, res: Response) => {
  const session = await mongoose.startSession();
  console.log("HEre");
  session.startTransaction();

  const safeParsed = PaymentSchema.safeParse(req.body);

  if (!safeParsed.success) {
    return res.status(404).json({
      error: "Invalid Inputs",
    });
  }

  const { amountSend, receiverNumber } = safeParsed.data;

  if (!amountSend || amountSend <= 0 || !receiverNumber) {
    return res.status(400).json({ error: "Invalid input" });
  }
  const userId = req.user?._id;

  const senderAccount = await accountTable
    .findOne({
      userId: userId,
    })
    .session(session);

  if (!senderAccount || senderAccount.balance < amountSend) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "insufficient balance",
    });
  }

  const reciever = await usersTable.findOne({
    number: receiverNumber,
  });

  const recieverUserId = reciever?._id;

  const recieverAccount = await accountTable
    .findOne({
      userId: recieverUserId,
    })
    .session(session);

  if (!recieverAccount) {
    await session.abortTransaction();
    return res.status(400).json({
      error: "Invalid account",
    });
  }

  if (senderAccount.userId.toString() === recieverAccount.userId.toString()) {
    await session.abortTransaction();
    return res.status(400).json({ error: "Cannot transfer to yourself" });
  }

  await accountTable
    .updateOne({ userId: userId }, { $inc: { balance: -amountSend } })
    .session(session);
  await accountTable
    .updateOne({ userId: recieverUserId }, { $inc: { balance: amountSend } })
    .session(session);

  await session.commitTransaction();
  res.json({
    message: "Transfer successful",
  });
};
