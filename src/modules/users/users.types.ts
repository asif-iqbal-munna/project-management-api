import { ObjectId } from "mongoose";

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
  clientId?: ObjectId;
  employeeId?: ObjectId;
  type: "client" | "employee";
  status: boolean;
  image?: string;
  role: {
    _id: ObjectId;
    name: string;
  };
}
