import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import Habits from "../entities/habit.entities";
import AppError from "../errors/AppError";

const validateHabitIdMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idHabit = parseInt(req.params.id);

  const habitRepository = AppDataSource.getRepository(Habits);

  const habit = habitRepository.findOneBy({
    id: idHabit,
  });

  if (!habit) {
    throw new AppError("Habit not found", 404);
  }

  return next();
};

export default validateHabitIdMiddleware;
