import { Router } from "express";
import {
  createUserController,
  listUserIdController,
  updatedUserController,
} from "../../controllers/users/users.controllers";
import { createUserSchema } from "../../schema/user/createUser.schema";
import validateDataSerializer from "../../serializers/validadeData.serializers";
import ensureTokenMiddleware from "../../middleware/ensureToken.middleware";
import validateIdUserMiddleware from "../../middleware/validateIdUser.middleware";
import { updatedUserSchema } from "../../schema/user/updatedUser.schema";
import validatedEmailMiddleware from "../../middleware/validatedEmail.middleware";

const userRouter = Router();

userRouter.post(
  "",
  validatedEmailMiddleware,
  validateDataSerializer(createUserSchema),
  createUserController
);

userRouter.get("/:id", ensureTokenMiddleware, listUserIdController);

userRouter.patch(
  "/:id",
  ensureTokenMiddleware,
  validateIdUserMiddleware,
  validateDataSerializer(updatedUserSchema),
  updatedUserController
);

export default userRouter;
