import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";
import jwt from "jsonwebtoken";

const ensureTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError("Invalid token", 401);
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded: any) => {
    if (error) {
      return res.status(401).json({
        message: error.message,
      });
    }

    req.user = {
      id: decoded.id,
    };

    return next();
  });
};

export default ensureTokenMiddleware;
