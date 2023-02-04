import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entities";
import { IUserRequest } from "../interfaces/user.interface";
import AppError from "../errors/AppError";

const validatedEmailMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const dataUser: IUserRequest = req.body;

  const userRepository = AppDataSource.getRepository(User);

  const emailUser = await userRepository.findOneBy({
    email: dataUser.email,
  });

  if (emailUser) {
    throw new AppError("User already exists", 403);
  }

  return next();
};

export default validatedEmailMiddleware;
