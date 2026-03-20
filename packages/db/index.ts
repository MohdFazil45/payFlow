import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });
import mongoose, { model, Schema } from "mongoose";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in environment variables");
}

mongoose.connect(process.env.DATABASE_URL);


const userSchema = new Schema({
  number: { type: String, unique: true, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
});

const accountSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  balance: {type:Number, required:true}
});

export const usersTable = model("User", userSchema);
export const accountTable = model("Account", accountSchema);
