import { Response } from "express";
import { ApiResponse } from "./types";

const sendResponse = <T>(res: Response, response: ApiResponse<T>) => {
  return res.status(response.code ? response.code : 500).json({
    status: response.status,
    message: response.message,
    data: response.data,
    totalPages: response.totalPages,
  });
};

export default sendResponse;
