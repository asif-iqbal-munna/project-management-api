import config from "../config/config";
import sendResponse from "../libs/responseHandler";
import { signJwt, verifyJwt } from "../libs/tokens";
import User from "../modules/users/users.model";
import { IUser } from "../modules/users/users.types";

export const deserializeUser = async (req: any, res: any, next: any) => {
  try {
    const accessToken = req.cookies["accessToken"];

    if (!accessToken) {
      return next();
    }

    const { decoded, expired } = verifyJwt(
      accessToken,
      config.accessTokenSecret as string
    );

    if (decoded && !expired) {
      req.user = decoded;
      return next();
    }

    if (expired && accessToken) {
      const refreshToken = req.cookies["refreshToken"];

      const { decoded, expired } = verifyJwt(
        refreshToken,
        config.refreshTokenSecret as string
      ) as unknown as { decoded: IUser; expired: boolean };

      if (!decoded || expired) {
        res.clearCookie("accessToken");
        res.clearCookie("refreshToken");
        return next();
      }

      const user = await User.findById(decoded._id).lean();

      if (!user) {
        return next();
      }

      const { password, ...rest } = user;

      const newAccessToken = signJwt(rest, config.accessTokenSecret as string, {
        expiresIn: "1d",
      });

      res.cookie("accessToken", newAccessToken, {
        httpOnly: true,
        maxAge: 1 * 24 * 60 * 60 * 1000, // 1 days in milliseconds
        // secure: true,
        sameSite: "none",
      });

      req.user = rest;

      return next();
    }

    return next();
  } catch (error) {
    return next(error);
  }
};
