import { Request, Response } from "express";
import { json } from "stream/consumers";
import createHabitServices from "../../services/habits/createHabit.services";
import lisHabitsIdServices from "../../services/habits/listHabitsId.services";
import updatedHabitsService from "../../services/habits/updatedHabits.services";

const createHabitController = async (req: Request, res: Response) => {
  const dataHabit = req.body;

  const newHabit = await createHabitServices(dataHabit);

  return res.json(newHabit);
};

const listHabitsIdController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const habits = await lisHabitsIdServices(id);

  return res.json(habits);
};

const updatedHabitsController = async (req: Request, res: Response) => {
  const dataHabit = req.body;
  const idHabit = parseInt(req.params.id);

  const habits = await updatedHabitsService(dataHabit, idHabit);

  return res.json(habits);
};

export {
  createHabitController,
  listHabitsIdController,
  updatedHabitsController,
};
