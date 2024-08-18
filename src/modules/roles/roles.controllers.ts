import { NextFunction, Request, Response } from "express";
import sendResponse from "../../libs/responseHandler";
import {
  createRole,
  getAllRoles,
  getRoleById,
  updateRoleById,
} from "./roles.services";

export const createRoleHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const role = req.body;
  try {
    await createRole(role);

    return sendResponse(res, {
      code: 200,
      status: true,
      message: "Role created successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const updateRoleByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const role = req.body;
  try {
    const updatedRole = await updateRoleById(id, role);
    return sendResponse(res, {
      code: 200,
      status: true,
      message: "Role updated successfully",
      data: updatedRole,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllRolesHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const roles = await getAllRoles();
    return sendResponse(res, {
      code: 200,
      status: true,
      message: "Roles fetched successfully",
      data: roles,
    });
  } catch (error) {
    next(error);
  }
};

export const getRoleByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const role = await getRoleById(id);

    if (!role) {
      return sendResponse(res, {
        code: 404,
        status: false,
        message: "Role not found",
      });
    }

    return sendResponse(res, {
      code: 200,
      status: true,
      message: "Role fetched successfully",
      data: role,
    });
  } catch (error) {
    next(error);
  }
};
