import { AppDataSource } from "../../data-source";
import Habits from "../../entities/habit.entities";
import AppError from "../../errors/AppError";

const deletedHabitService = async (idHabit: number) => {
  const habitRepository = AppDataSource.getRepository(Habits);

  const habit = await habitRepository.findOneBy({
    id: idHabit,
  });

  if (!habit.isActive) {
    throw new AppError("User not Active", 400);
  }

  await habitRepository.softRemove(habit);

  const listHabit = await habitRepository.save({ ...habit, isActive: false });

  return listHabit;
};

export default deletedHabitService;
