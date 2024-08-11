import express from "express";
import { createUserHandler } from "./users.controllers";

const router = express.Router();

router.post("/v1", createUserHandler);

export default router;
