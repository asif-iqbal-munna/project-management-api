import { NextFunction, Request, Response } from "express";
import sendResponse from "../../libs/responseHandler";
import { getUserByEmail } from "../users/users.services";
import { signJwt } from "../../libs/tokens";
import config from "../../config/config";

export const signInHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("there XXXXXXXXXXXXX");

    const { email, password } = req.body;
    const user = await getUserByEmail(email);

    if (!user) {
      return sendResponse(res, {
        code: 404,
        status: false,
        message: "User not found",
      });
    }

    const isPasswordValid = await user.validatePassword(password);

    if (!isPasswordValid) {
      return sendResponse(res, {
        code: 400,
        status: false,
        message: "Invalid password",
      });
    }

    const { password: userPass, ...rest } = user.toObject();

    const accessToken = signJwt(rest, config.accessTokenSecret as string, {
      expiresIn: "1d",
    });

    const refreshToken = signJwt(
      { _id: user._id },
      config.refreshTokenSecret as string,
      {
        expiresIn: "1y",
      }
    );

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      // 1 days in milliseconds
      maxAge: 1 * 24 * 60 * 60 * 1000,
      // secure: true,
      sameSite: "none",
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      // 7 days in milliseconds
      maxAge: 7 * 24 * 60 * 60 * 1000,
      // secure: true,
      sameSite: "none",
    });

    return sendResponse(res, {
      code: 200,
      status: true,
      message: "User signed in successfully",
      data: {
        user: rest,
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const signOutHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    return sendResponse(res, {
      code: 200,
      status: true,
      message: "User signed out successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const forgotPasswordEmailVerificationHandler = (
  req: Request,
  res: Response
) => {
  try {
  } catch (error) {}
};
