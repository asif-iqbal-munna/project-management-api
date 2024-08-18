import express from "express";
import { userRoutes } from "../modules/users/users.routes";
import { employeeRoutes } from "../modules/employees/employees.routes";
import { clientRoutes } from "../modules/clients/clients.routes";
import { departmentRoutes } from "../modules/departments/departments.routes";
import { roleRoutes } from "../modules/roles/roles.routes";
import { authRoutes } from "../modules/auth/auth.routes";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/employees", employeeRoutes);
router.use("/clients", clientRoutes);
router.use("/departments", departmentRoutes);
router.use("/roles", roleRoutes);

export default router;
