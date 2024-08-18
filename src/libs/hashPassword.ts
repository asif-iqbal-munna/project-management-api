import bcrypt from "bcrypt";
export const hashedPassword = async (password: string) => {
  try {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    return error;
  }
};
