import { Router } from "express";
import {
  createHabitController,
  deletedHabitController,
  listHabitsIdController,
  updatedHabitsController,
} from "../../controllers/habits/habit.controller";
import { createHabitSchema } from "../../schema/habit/createHabit.schema";
import validateDataSerializer from "../../serializers/validadeData.serializers";
import ensureTokenMiddleware from "../../middleware/ensureToken.middleware";
import validateIdUserMiddleware from "../../middleware/validateIdUser.middleware";
import validateHabitIdMiddleware from "../../middleware/validateHabitId.middleware";
import { updatedHabitSchema } from "../../schema/habit/updatedHabit.schema";

const habitRouter = Router();

habitRouter.post(
  "",
  ensureTokenMiddleware,
  validateDataSerializer(createHabitSchema),
  createHabitController
);

habitRouter.get("", ensureTokenMiddleware, listHabitsIdController);

habitRouter.patch(
  "/:id",
  ensureTokenMiddleware,
  validateHabitIdMiddleware,
  validateDataSerializer(updatedHabitSchema),
  updatedHabitsController
);

habitRouter.delete(
  "/:id",
  ensureTokenMiddleware,
  validateHabitIdMiddleware,
  deletedHabitController
);

export default habitRouter;
