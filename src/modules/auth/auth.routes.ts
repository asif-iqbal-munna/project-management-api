import express from "express";
import { signInHandler } from "./auth.controller";

const router = express.Router();

router.post("/sign-in/v1", signInHandler);
// router.post("/forgot-password", forgotPasswordHandler);
// router.post("/user-reset-password", userResetPasswordHandler);
// router.post("/reset-password", resetPasswordHandler);
// router.post("/verify-reset-password-token", verifyResetPasswordTokenHandler);

export { router as authRoutes };
