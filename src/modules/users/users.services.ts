import mongoose from "mongoose";
import User from "./users.model";
import { IUser, IUserMethods } from "./users.types";

export const createUser = (
  user: IUser,
  session?: mongoose.mongo.ClientSession
) => {
  return User.create(user, { session });
};

export const getUserById = (id: string) => {
  return User.findById(id)
    .populate([
      { path: "role", select: "name" },
      { path: "department", select: "name" },
    ])
    .lean();
};

export const getUserByEmail = (email: string) => {
  return User.findOne({ email }).populate([
    { path: "role", select: "name" },
    { path: "department", select: "name" },
  ]);
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
