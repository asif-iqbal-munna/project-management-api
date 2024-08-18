import { NextFunction, Request, Response } from "express";
import sendResponse from "../../libs/responseHandler";
import {
  createDepartment,
  getAllDepartments,
  getDepartmentById,
  updateDepartmentById,
} from "./departments.services";

export const createDepartmentHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const department = req.body;
  try {
    await createDepartment(department);

    return sendResponse(res, {
      code: 200,
      status: true,
      message: "Department created successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const updateDepartmentByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const department = req.body;
  try {
    const updatedDepartment = await updateDepartmentById(id, department);
    return sendResponse(res, {
      code: 200,
      status: true,
      message: "Department updated successfully",
      data: updatedDepartment,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllDepartmentsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const departments = await getAllDepartments();
    return sendResponse(res, {
      code: 200,
      status: true,
      message: "Departments fetched successfully",
      data: departments,
    });
  } catch (error) {
    next(error);
  }
};

export const getDepartmentByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const department = await getDepartmentById(id);

    if (!department) {
      return sendResponse(res, {
        code: 404,
        status: false,
        message: "Department not found",
      });
    }

    return sendResponse(res, {
      code: 200,
      status: true,
      message: "Department fetched successfully",
      data: department,
    });
  } catch (error) {
    next(error);
  }
};
