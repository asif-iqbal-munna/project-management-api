import User from "./users.model";
import { IUser } from "./users.types";

export const createUser = (user: IUser) => {
  return User.create(user);
};

export const getUserById = (id: string) => {
  return User.findById(id);
};

export const getUserByEmail = (email: string) => {
  return User.findOne({ email });
};

export const getAllUsers = () => {
  return User.find();
};

export const updateUserById = (id: string, user: IUser) => {
  return User.findByIdAndUpdate(id, user, { new: true });
};

export const deleteUserById = (id: string) => {
  return User.findByIdAndDelete(id);
};
