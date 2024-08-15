import Department from "./departments.model";
import { IDepartment } from "./departments.types";

export const createDepartment = (data: IDepartment) => {
  return Department.create(data);
};

export const getDepartmentById = (id: string) => {
  return Department.findById(id);
};

export const getAllDepartments = () => {
  return Department.find();
};

export const updateDepartmentById = (id: string, updateData: IDepartment) => {
  return Department.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteDepartmentById = (id: string) => {
  return Department.findByIdAndDelete(id);
};
