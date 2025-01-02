import { model, Schema } from 'mongoose';
import {
  EmployeeModel,
  IEmployee,
  IEmployeeMethods,
  TAgreement,
  TBank,
  TParents,
  TReference,
} from './employee.interface';

const docTypes = ['nid', 'passport', 'drivingLicense', 'birthCertificate'];

const agreementSchema = new Schema<TAgreement>({
  type: {
    type: String,
    enum: ['permanent', 'contractual'],
  },
  startsFrom: {
    type: String,
  },
  endsAt: {
    type: String,
  },
  compensation: {
    type: Number,
  },
  increment: {
    type: String,
    enum: ['yearly', 'halfYearly'],
  },
  noticePeriod: {
    type: Number,
  },
  deed: {
    type: String,
  },
});

const bankSchema = new Schema<TBank>({
  name: {
    type: String,
  },
  branch: {
    type: String,
  },
  accountNo: {
    type: String,
  },
  accountType: {
    type: String,
    enum: ['savings', 'current'],
  },
  routingNo: {
    type: String,
  },
  swiftCode: {
    type: String,
  },
});

const parentsSchema = new Schema<TParents>({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  docType: {
    type: String,
    enum: docTypes,
  },
  docNumber: {
    type: String,
  },
  profession: {
    type: String,
  },
});

const referenceSchema = new Schema<TReference>({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  company: {
    type: String,
  },
  designation: {
    type: String,
  },
});

const employeeSchema = new Schema<IEmployee, EmployeeModel, IEmployeeMethods>(
  {
    employeeId: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    projectIds: {
      type: [Schema.Types.ObjectId],
      ref: 'Project',
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    dob: {
      type: String,
    },
    designation: {
      type: String,
    },
    presentAddress: {
      type: String,
    },
    permanentAddress: {
      type: String,
    },
    docType: {
      type: String,
      enum: docTypes,
    },
    docNumber: {
      type: String,
    },
    photo: {
      type: String,
    },
    agreement: [agreementSchema],
    bank: bankSchema,
    parents: {
      mother: parentsSchema,
      father: parentsSchema,
    },
    emergencyContact: {
      name: {
        type: String,
      },
      phone: {
        type: String,
      },
      relation: {
        type: String,
      },
    },
    reference: [referenceSchema],
    closing: {
      type: {
        type: String,
        enum: ['resignation', 'termination'],
      },
      reason: {
        type: String,
      },
      date: {
        type: String,
      },
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
    },
  },
  { timestamps: true },
);

employeeSchema.statics.isEmployeeExists = async function (id: string) {
  return await this.findById(id);
};

export const Employee = model<IEmployee, EmployeeModel>(
  'Employee',
  employeeSchema,
);
