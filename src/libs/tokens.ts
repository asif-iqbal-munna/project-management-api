import jwt from "jsonwebtoken";
export function signJwt(payload: any, publicKey: string, options: any) {
  const token = jwt.sign(payload, publicKey, {
    ...(options && options),
  });
  return token;
}

export function verifyJwt(token: string, publicKey: string) {
  try {
    const decoded = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (e: any) {
    return {
      valid: false,
      expired: e.message === "jwt expired",
      decoded: null,
    };
  }
}
