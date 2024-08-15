import express from "express";
import {
  createEmployeeHandler,
  getAllEmployeesHandler,
  getEmployeeByIdHandler,
  updateEmployeeByIdHandler,
} from "./employees.controllers";

const router = express.Router();

router.post("/v1", createEmployeeHandler);
router.get("/v1", getAllEmployeesHandler);
router.get("/v1/:id", getEmployeeByIdHandler);
router.put("/v1/:id", updateEmployeeByIdHandler);

export { router as employeeRoutes };
