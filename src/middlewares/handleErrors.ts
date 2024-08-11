import { NextFunction, Request, Response } from "express";
import sendResponse from "../libs/responseHandler";

export const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error.name === "ValidationError")
    return sendResponse(res, {
      status: false,
      code: 400,
      message: "Input validation error.",
    });
  if (error.name === "CastError")
    return sendResponse(res, {
      status: false,
      code: 400,
      message: "Input type error.",
    });
  if (error.code === 11000)
    return sendResponse(res, {
      status: false,
      code: 400,
      message: "Input contains duplicate data.",
    });

  return sendResponse(res, {
    status: false,
    code: 500,
    message: "Unknown error occurred",
  });
};

// fix and optimize the errorHandler give proper status code
