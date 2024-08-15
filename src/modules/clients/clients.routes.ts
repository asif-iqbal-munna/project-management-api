import express from "express";
import {
  createClientHandler,
  getAllClientsHandler,
  getClientByIdHandler,
  updateClientByIdHandler,
} from "./clients.controllers";

const router = express.Router();

router.post("/v1", createClientHandler);
router.get("/v1", getAllClientsHandler);
router.get("/v1/:id", getClientByIdHandler);
router.put("/v1/:id", updateClientByIdHandler);

export { router as clientRoutes };
