import { Router } from "express";
import { createUserController } from "../../controllers/users/users.controllers";
import { createUserSchema } from "../../schema/createUser.schema";
import validateDataSerializer from "../../serializers/validadeData.serializers";

const userRouter = Router();

userRouter.post(
  "",
  validateDataSerializer(createUserSchema),
  createUserController
);

export default userRouter;
