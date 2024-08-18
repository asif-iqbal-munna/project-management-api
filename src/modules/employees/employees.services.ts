import mongoose from "mongoose";
import { IUser } from "../users/users.types";
import Employee from "./employees.model";
import { IEmployee } from "./employees.types";
import User from "../users/users.model";
import { generateUniqueId } from "../../libs/generateEmployeeId";

export const createEmployee = async (
  data: IEmployee & IUser,
  session: mongoose.mongo.ClientSession
) => {
  const { name, email, department, type, role, password, ...rest } = data;

  const newUser = await User.create(
    [
      {
        name,
        email,
        password,
        type,
        department,
        role,
      },
    ],
    { session }
  );

  console.log(newUser);

  const newEmployee = await Employee.create(
    [
      {
        ...rest,
        name,
        employeeId: generateUniqueId("EMP"),
        userId: newUser[0]._id,
      },
    ],
    { session }
  );

  console.log(newEmployee);

  return newEmployee;
};

export const getEmployeeById = (id: string) => {
  return Employee.findById(id);
};

export const getAllEmployees = () => {
  return Employee.find();
};

export const updateEmployeeById = (id: string, updateData: IEmployee) => {
  return Employee.findByIdAndUpdate(id, updateData, { new: true });
};
