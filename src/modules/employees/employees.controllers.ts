import { NextFunction, Request, Response } from "express";
import sendResponse from "../../libs/responseHandler";
import {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployeeById,
} from "./employees.services";

export const createEmployeeHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const employee = req.body;
  try {
    await createEmployee(employee);

    return sendResponse(res, {
      code: 200,
      status: true,
      message: "Employee created successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const updateEmployeeByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const employee = req.body;
  try {
    const updatedEmployee = await updateEmployeeById(id, employee);
    return sendResponse(res, {
      code: 200,
      status: true,
      message: "Employee updated successfully",
      data: updatedEmployee,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllEmployeesHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const employees = await getAllEmployees();
    return sendResponse(res, {
      code: 200,
      status: true,
      message: "Employees fetched successfully",
      data: employees,
    });
  } catch (error) {
    next(error);
  }
};

export const getEmployeeByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const employee = await getEmployeeById(id);

    if (!employee) {
      return sendResponse(res, {
        code: 404,
        status: false,
        message: "Employee not found",
      });
    }

    return sendResponse(res, {
      code: 200,
      status: true,
      message: "Employee fetched successfully",
      data: employee,
    });
  } catch (error) {
    next(error);
  }
};
