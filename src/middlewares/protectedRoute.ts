import { NextFunction, Response } from "express";
import sendResponse from "../libs/responseHandler";
import { IRequest } from "../libs/types";

export const protectedRoute = (
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    return sendResponse(res, {
      code: 403,
      status: false,
      message: "Unauthorized user",
    });
  } else {
    return next();
  }
};
