import mongoose, { Model, Types, model } from "mongoose";
import { IUser, IUserMethods } from "./users.types";
import { hashedPassword, comparePassword } from "../../libs/securePassword";
type UserModel = Model<IUser, {}, IUserMethods>;
const userSchema = new mongoose.Schema<IUser, UserModel, IUserMethods>(
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
      type: Types.ObjectId,
      ref: "Role",
      required: true,
    },
    department: {
      type: Types.ObjectId,
      ref: "Department",
      required: true,
    },
    type: {
      type: String,
      enum: ["client", "employee", "both", "admin"],
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

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = (await hashedPassword(this.password)) as string;
  }
  next();
});

userSchema.method(
  "validatePassword",
  function validatePassword(candidatePassword: string) {
    const user = this;
    return comparePassword(candidatePassword, user.password);
  }
);

const User = model<IUser, UserModel>("User", userSchema);

export default User;
