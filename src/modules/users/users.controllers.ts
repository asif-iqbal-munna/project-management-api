import { NextFunction, Request, Response } from "express";
import sendResponse from "../../libs/responseHandler";
import {
  createUser,
  getAllUsers,
  getUserByEmail,
  getUserById,
  updateUserById,
} from "./users.services";

export const createUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.body;
  const { email } = user;
  try {
    const userExist = await getUserByEmail(email);

    if (userExist) {
      return sendResponse(res, {
        code: 409,
        status: false,
        message: "User already exists",
      });
    }

    await createUser(user);

    return sendResponse(res, {
      code: 200,
      status: true,
      message: "User created successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const updateUserByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const user = req.body;
  try {
    const updatedUser = await updateUserById(id, user);
    return sendResponse(res, {
      code: 200,
      status: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllUsersHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getAllUsers();
    return sendResponse(res, {
      code: 200,
      status: true,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);

    if (!user) {
      return sendResponse(res, {
        code: 404,
        status: false,
        message: "User not found",
      });
    }

    return sendResponse(res, {
      code: 200,
      status: true,
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
