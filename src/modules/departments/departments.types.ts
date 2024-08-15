import { ObjectId } from "mongoose";

export interface IDepartment {
  _id?: string;
  name: string;
  description: string;
  role: ObjectId;
  status: boolean;
}
