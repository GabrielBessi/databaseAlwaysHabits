import { AppDataSource } from "../../data-source";
import { IHabitUpdated } from "../../interfaces/habit.interface";
import Habits from "../../entities/habit.entities";

const updatedHabitsService = async (
  dataHabit: IHabitUpdated,
  idHabit: number
) => {
  const habitsRepository = AppDataSource.getRepository(Habits);

  const habit = await habitsRepository.findOneBy({
    id: idHabit,
  });

  const updatedHabit = await habitsRepository.create({
    ...habit,
    ...dataHabit,
  });

  await habitsRepository.save(updatedHabit);

  return updatedHabit;
};

export default updatedHabitsService;
