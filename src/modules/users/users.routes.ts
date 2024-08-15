import express from "express";
import {
  createUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  updateUserByIdHandler,
} from "./users.controllers";

const router = express.Router();

router.post("/v1", createUserHandler);
router.get("/v1", getAllUsersHandler);
router.get("/v1/:id", getUserByIdHandler);
router.put("/v1/:id", updateUserByIdHandler);

export { router as userRoutes };
