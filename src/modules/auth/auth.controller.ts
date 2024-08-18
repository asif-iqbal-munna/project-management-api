import { Request, Response } from "express";
import sendResponse from "../../libs/responseHandler";
import { getUserByEmail } from "../users/users.services";
import { signJwt } from "../../libs/tokens";
import config from "../../config/config";

export const signInHandler = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);
  if (!user) {
    return sendResponse(res, {
      code: 404,
      status: false,
      message: "User not found",
    });
  }

  console.log(user);

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

  return sendResponse(res, {
    code: 200,
    status: true,
    message: "User signed in successfully",
    data: {
      user: rest,
      accessToken,
      refreshToken,
    },
  });
};
