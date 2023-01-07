import { Router } from "express";
import { loginUserController } from "../../controllers/users/users.controllers";

const loginRouter = Router();

loginRouter.post("", loginUserController);

export default loginRouter;
