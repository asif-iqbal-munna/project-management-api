import Role from "./roles.model";
import { IRole } from "./roles.types";

export const createRole = (role: IRole) => {
  return Role.create(role);
};

export const getRoleById = (id: string) => {
  return Role.findById(id);
};

export const getAllRoles = () => {
  return Role.find();
};

export const updateRoleById = (id: string, role: IRole) => {
  return Role.findByIdAndUpdate(id, role, { new: true });
};

export const deleteRoleById = (id: string) => {
  return Role.findByIdAndDelete(id);
};
