import mongoose from "mongoose";
import { IRole } from "./roles.types";

const roleSchema = new mongoose.Schema<IRole>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
    },
    description: {
      type: String,
    },
    status: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Role = mongoose.model<IRole>("Role", roleSchema);
export default Role;
