import { ObjectId } from "mongoose";

export interface IEmployee {
  _id?: string;
  name: string;
  phone: string;
  userId: ObjectId;
  projectId?: ObjectId[];
  department: ObjectId;
  employeeId: string;
  dob?: string;
  doc?: {
    type: ["nid", "passport", "birth_certificate", "driving_license"];
    img: string;
  };
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
  agreement?: {
    type: ["contract", "leave", "probation", "promotion"];
    deed: string[];
    startsFrom: string;
    endsAt: string;
    compensation: number;
  };
  parents?: {
    mother: {
      name: string;
      phone: string;
      nid: string;
      profession: string;
    };
    father: {
      name: string;
      phone: string;
      nid: string;
      profession: string;
    };
  };
  emergency?: {
    name: string;
    phone: string;
    relation: string;
  };
  status: boolean;
  image?: string;
}
