import * as jwt from "jsonwebtoken";
import { resolve } from "path/posix";
import { AuthenticationData } from "../types";

const expiresIn = "1min";

export const generateToken = (input: AuthenticationData): string => {
  const token = jwt.sign(
    {
      id: input.id,
      role: input.role
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}