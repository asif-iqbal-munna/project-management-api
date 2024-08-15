import { ObjectId } from "mongoose";

export interface IClient {
  _id?: string;
  name: string;
  phone: string;
  userId: ObjectId;
  address?: {
    present: string;
    permanent: string;
  };
  business?: {
    name: string;
    description: string;
    address: string;
    age: number;
    role: string;
  };
  projectId?: ObjectId[];
  status: boolean;
  image?: string;
}
