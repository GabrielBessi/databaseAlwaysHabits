import { Request, Response } from "express";
import createHabitServices from "../../services/habits/createHabit.services";
import deletedHabitService from "../../services/habits/deletedHabit.services";
import lisHabitsIdServices from "../../services/habits/listHabitsId.services";
import updatedHabitsService from "../../services/habits/updatedHabits.services";

const createHabitController = async (req: Request, res: Response) => {
  const dataHabit = req.body;

  const newHabit = await createHabitServices(dataHabit);

  return res.json(newHabit);
};

const listHabitsIdController = async (req: Request, res: Response) => {
  const habits = await lisHabitsIdServices();

  return res.json(habits);
};

const updatedHabitsController = async (req: Request, res: Response) => {
  const dataHabit = req.body;
  const idHabit = parseInt(req.params.id);

  const habits = await updatedHabitsService(dataHabit, idHabit);

  return res.json(habits);
};

const deletedHabitController = async (req: Request, res: Response) => {
  const idHabit = parseInt(req.params.id);

  const message = await deletedHabitService(idHabit);

  return res.json(message);
};

export {
  createHabitController,
  listHabitsIdController,
  updatedHabitsController,
  deletedHabitController,
};
