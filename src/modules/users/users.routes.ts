import express from "express";
import {
  createUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  updateUserByIdHandler,
} from "./users.controllers";
import { protectedRoute } from "../../middlewares/protectedRoute";

const router = express.Router();

router.post("/v1", protectedRoute, createUserHandler);
router.get("/v1", protectedRoute, getAllUsersHandler);
router.get("/v1/:id", protectedRoute, getUserByIdHandler);
router.put("/v1/:id", protectedRoute, updateUserByIdHandler);

export { router as userRoutes };
