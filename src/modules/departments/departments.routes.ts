import express from "express";
import {
  createDepartmentHandler,
  getAllDepartmentsHandler,
  getDepartmentByIdHandler,
  updateDepartmentByIdHandler,
} from "./departments.controllers";
import { protectedRoute } from "../../middlewares/protectedRoute";

const router = express.Router();

router.post("/v1", protectedRoute, createDepartmentHandler);
router.get("/v1", protectedRoute, getAllDepartmentsHandler);
router.get("/v1/:id", protectedRoute, getDepartmentByIdHandler);
router.put("/v1/:id", protectedRoute, updateDepartmentByIdHandler);

export { router as departmentRoutes };
