import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entities";
import AppError from "../errors/AppError";

const validateIdUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idUser = parseInt(req.params.id);

  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: idUser,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return next();
};

export default validateIdUserMiddleware;
