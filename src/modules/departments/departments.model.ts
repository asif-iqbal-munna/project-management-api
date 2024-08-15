import mongoose from "mongoose";
import { IDepartment } from "./departments.types";

const departmentSchema = new mongoose.Schema<IDepartment>(
  {
    name: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
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

const Department = mongoose.model<IDepartment>("Department", departmentSchema);
export default Department;
