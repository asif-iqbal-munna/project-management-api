import mongoose from "mongoose";
import { IEmployee } from "./employees.types";

export const employeeSchema = new mongoose.Schema<IEmployee>(
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
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    projectId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
    employeeId: {
      type: String,
      required: true,
      unique: true,
    },
    dob: String,
    doc: {
      type: {
        type: String,
        enum: ["nid", "passport", "birth_certificate", "driving_license"],
      },
      img: {
        type: String,
      },
    },
    address: {
      present: String,
      permanent: String,
    },
    business: {
      name: String,
      description: String,
      address: String,
      age: Number,
      role: String,
    },
    agreement: {
      type: {
        type: String,
        enum: ["contract", "leave", "probation", "promotion", "permanent"],
        required: true,
      },
      deed: [String],
      startsFrom: String,
      endsAt: String,
      compensation: Number,
    },
    parents: {
      mother: {
        name: String,
        phone: String,
        nid: String,
        profession: String,
      },
      father: {
        name: String,
        phone: String,
        nid: String,
        profession: String,
      },
    },
    emergency: {
      name: String,
      phone: String,
      relation: String,
    },
    status: {
      type: Boolean,
      default: true,
    },
    image: String,
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model<IEmployee>("Employee", employeeSchema);
export default Employee;
