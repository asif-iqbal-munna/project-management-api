import express from "express";
import {
  forgotPasswordEmailVerificationHandler,
  signInHandler,
  signOutHandler,
} from "./auth.controller";
import { protectedRoute } from "../../middlewares/protectedRoute";

const router = express.Router();

router.post("/sign-in/v1", signInHandler);
router.post("/sign-out/v1", signOutHandler);
router.post("verify-user/v1", protectedRoute);
router.post(
  "/forgot-password/verify-email/v1",
  forgotPasswordEmailVerificationHandler
);
// router.post("/user-reset-password", userResetPasswordHandler);
// router.post("/reset-password", resetPasswordHandler);
// router.post("/verify-reset-password-token", verifyResetPasswordTokenHandler);

export { router as authRoutes };
