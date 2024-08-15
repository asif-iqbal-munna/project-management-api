import express from "express";
import {
  createDepartmentHandler,
  getAllDepartmentsHandler,
  getDepartmentByIdHandler,
  updateDepartmentByIdHandler,
} from "./departments.controllers";

const router = express.Router();

router.post("/v1", createDepartmentHandler);
router.get("/v1", getAllDepartmentsHandler);
router.get("/v1/:id", getDepartmentByIdHandler);
router.put("/v1/:id", updateDepartmentByIdHandler);

export { router as departmentRoutes };
