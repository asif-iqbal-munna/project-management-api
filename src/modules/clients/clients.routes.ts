import express from "express";
import {
  createClientHandler,
  getAllClientsHandler,
  getClientByIdHandler,
  updateClientByIdHandler,
} from "./clients.controllers";
import { protectedRoute } from "../../middlewares/protectedRoute";

const router = express.Router();

router.post("/v1", protectedRoute, createClientHandler);
router.get("/v1", protectedRoute, getAllClientsHandler);
router.get("/v1/:id", protectedRoute, getClientByIdHandler);
router.put("/v1/:id", protectedRoute, updateClientByIdHandler);

export { router as clientRoutes };
