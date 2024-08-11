import mongoose from "mongoose";
import { IUser } from "./users.types";

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      length: [6, "Password must be 6 digit length"],
      required: true,
    },
    role: {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
        required: true,
      },
      name: { type: String, required: true },
    },
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
    type: {
      type: String,
      enum: ["client", "employee"],
      required: true,
    },
    status: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IUser>("User", userSchema);
export default User;
