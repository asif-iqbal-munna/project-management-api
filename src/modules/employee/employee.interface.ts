import { Model, ObjectId } from 'mongoose';

export type DocTypes =
  | 'nid'
  | 'passport'
  | 'drivingLicense'
  | 'birthCertificate';

export type TAgreement = {
  type: 'permanent' | 'contractual';
  startsFrom: string;
  endsAt: string;
  compensation: number;
  increment: 'yearly' | 'halfYearly';
  noticePeriod: number;
  deed: string;
};
export type TBank = {
  name: string;
  branch: string;
  accountNo: string;
  accountType: 'savings' | 'current';
  routingNo: string;
  swiftCode: string;
};

export type TParents = {
  name: string;
  phone: string;
  docType: DocTypes;
  docNumber: string;
  profession: string;
};

export type TReference = {
  name: string;
  phone: string;
  company: string;
  designation: string;
};

export interface IEmployee {
  employeeId: string;
  userId: ObjectId;
  projectIds: ObjectId[];
  name: string;
  email: string;
  phone: string;
  dob: string;
  designation: string;
  presentAddress: string;
  permanentAddress: string;
  docType: DocTypes;
  docNumber: string;
  photo: string;
  agreement: [TAgreement];
  bank: TBank;
  parents: {
    mother: TParents;
    father: TParents;
  };
  emergencyContact: {
    name: string;
    phone: string;
    relation: string;
  };
  reference: [TReference];
  closing: {
    type: 'resignation' | 'termination';
    reason: string;
    date: string;
  };
  status: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}

// Put all user instance methods in this interface:
export interface IEmployeeMethods {
  isEmployeeExists(id: string): Promise<IEmployee | null>;
}

export type EmployeeModel = Model<IEmployee, object, IEmployeeMethods>;
