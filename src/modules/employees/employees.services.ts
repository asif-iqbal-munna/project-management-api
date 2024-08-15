import Employee from "./employees.model";
import { IEmployee } from "./employees.types";

export const createEmployee = (data: IEmployee) => {
  return Employee.create(data);
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
