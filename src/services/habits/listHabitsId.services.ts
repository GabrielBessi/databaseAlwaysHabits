import { AppDataSource } from "../../data-source";
import Habits from "../../entities/habit.entities";
import AppError from "../../errors/AppError";
import { IHabitResponse } from "../../interfaces/habit.interface";

const lisHabitsIdServices = async (): Promise<IHabitResponse[]> => {
  const habitsRepository = AppDataSource.getRepository(Habits);

  const habits = await habitsRepository.find();

  return habits;
};

export default lisHabitsIdServices;
