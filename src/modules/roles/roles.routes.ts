import express from "express";
import {
  createRoleHandler,
  getAllRolesHandler,
  getRoleByIdHandler,
  updateRoleByIdHandler,
} from "./roles.controllers";
import { protectedRoute } from "../../middlewares/protectedRoute";

const router = express.Router();

router.post("/v1", protectedRoute, createRoleHandler);
router.get("/v1", protectedRoute, getAllRolesHandler);
router.get("/v1/:id", protectedRoute, getRoleByIdHandler);
router.put("/v1/:id", protectedRoute, updateRoleByIdHandler);

export { router as roleRoutes };
