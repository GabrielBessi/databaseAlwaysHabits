import { AppDataSource } from "../../data-source";
import Habits from "../../entities/habit.entities";
import AppError from "../../errors/AppError";
import { IHabitResponse } from "../../interfaces/habit.interface";
import { IUserResponse } from "../../interfaces/user.interface";

const lisHabitsIdServices = async (
  idUser: number
): Promise<IHabitResponse[]> => {
  const habitsRepository = AppDataSource.getRepository(Habits);

  const habits = await habitsRepository.find({
    where: {
      user: idUser as IUserResponse,
    },
  });

  if (!habits) {
    throw new AppError("Habits not found", 404);
  }

  return habits;
};

export default lisHabitsIdServices;
