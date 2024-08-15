import express from "express";
import {
  createRoleHandler,
  getAllRolesHandler,
  getRoleByIdHandler,
  updateRoleByIdHandler,
} from "./roles.controllers";

const router = express.Router();

router.post("/v1", createRoleHandler);
router.get("/v1", getAllRolesHandler);
router.get("/v1/:id", getRoleByIdHandler);
router.put("/v1/:id", updateRoleByIdHandler);

export { router as roleRoutes };
