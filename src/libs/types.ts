import { Request } from "express";
import { IUser } from "../modules/users/users.types";

export type ApiResponse<T> = {
  code: number;
  status: boolean;
  message: string;
  totalPages?: number;
  data?: T;
  stack?: string;
};

export interface IRequest extends Request {
  user?: IUser;
}
