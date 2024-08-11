import { NextFunction, Request, Response } from "express";
import sendResponse from "../../libs/responseHandler";
import { createUser, getUserByEmail } from "./users.services";

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
