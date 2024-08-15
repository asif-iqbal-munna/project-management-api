import mongoose from "mongoose";
import { IClient } from "./clients.types";

const clientSchema = new mongoose.Schema<IClient>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      present: { type: String },
      permanent: { type: String },
    },
    business: {
      name: { type: String },
      description: { type: String },
      address: { type: String },
      age: { type: Number },
      role: { type: String },
    },
    projectId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Client = mongoose.model<IClient>("Client", clientSchema);
export default Client;
