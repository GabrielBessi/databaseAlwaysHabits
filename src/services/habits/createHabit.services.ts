import { AppDataSource } from "../../data-source";
import Habits from "../../entities/habit.entities";
import { IHabitRequest } from "../../interfaces/habit.interface";
import { IUserResponse } from "../../interfaces/user.interface";

const createHabitServices = async ({
  tittle,
  description,
  category,
  status,
  userId,
}: IHabitRequest): Promise<Habits> => {
  const habitRepository = AppDataSource.getRepository(Habits);

  const habit = habitRepository.create({
    tittle,
    description,
    category,
    status,
    user: userId as IUserResponse,
  });

  await habitRepository.save(habit);

  return habit;
};

export default createHabitServices;
