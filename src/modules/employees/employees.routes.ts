import express from "express";
import {
  createEmployeeHandler,
  getAllEmployeesHandler,
  getEmployeeByIdHandler,
  updateEmployeeByIdHandler,
} from "./employees.controllers";
import { protectedRoute } from "../../middlewares/protectedRoute";

const router = express.Router();

router.post("/v1", protectedRoute, createEmployeeHandler);
router.get("/v1", protectedRoute, getAllEmployeesHandler);
router.get("/v1/:id", protectedRoute, getEmployeeByIdHandler);
router.put("/v1/:id", protectedRoute, updateEmployeeByIdHandler);

export { router as employeeRoutes };
