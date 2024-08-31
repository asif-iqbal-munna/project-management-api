import { NextFunction, Request, Response } from "express";
import sendResponse from "../../libs/responseHandler";
import {
  createClient,
  getAllClients,
  getClientById,
  updateClientById,
} from "./clients.services";
import { IRequest } from "../../libs/types";
export const createClientHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const client = req.body;
  try {
    await createClient(client);

    return sendResponse(res, {
      code: 200,
      status: true,
      message: "Client created successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const updateClientByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const client = req.body;
  try {
    const updatedClient = await updateClientById(id, client);
    return sendResponse(res, {
      code: 200,
      status: true,
      message: "Client updated successfully",
      data: updatedClient,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllClientsHandler = async (
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const clients = await getAllClients();
    return sendResponse(res, {
      code: 200,
      status: true,
      message: "Clients fetched successfully",
      data: clients,
    });
  } catch (error) {
    next(error);
  }
};

export const getClientByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const client = await getClientById(id);

    if (!client) {
      return sendResponse(res, {
        code: 404,
        status: false,
        message: "Client not found",
      });
    }

    return sendResponse(res, {
      code: 200,
      status: true,
      message: "Client fetched successfully",
      data: client,
    });
  } catch (error) {
    next(error);
  }
};
