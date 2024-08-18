import { ObjectId } from "mongoose";

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
  type: "client" | "employee" | "both";
  status?: boolean;
  image?: string;
  role: ObjectId;
  department: ObjectId;
}

export interface IUserMethods {
  validatePassword(candidatePassword: string): Promise<boolean>;
}
