import { Request, Response } from "express";
import createUserServices from "../../services/users/createUser.services";
import { ILoginRequest, IUserRequest } from "../../interfaces/user.interface";
import loginUserService from "../../services/users/loginUser.services";
import listUserIdService from "../../services/users/listUserId.services";
import updatedUserService from "../../services/users/updatedUser.services";
import { instanceToPlain } from "class-transformer";

const createUserController = async (req: Request, res: Response) => {
  const dataUser: IUserRequest = req.body;

  const newUser = await createUserServices(dataUser);

  return res.json(instanceToPlain(newUser));
};

const loginUserController = async (req: Request, res: Response) => {
  const dataLogin: ILoginRequest = req.body;

  const token = await loginUserService(dataLogin);

  return res.json({ token });
};

const listUserIdController = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);

  const user = await listUserIdService(userId);

  return res.json(instanceToPlain(user));
};

const updatedUserController = async (req: Request, res: Response) => {
  const dataUser = req.body;
  const id = parseInt(req.params.id);

  const user = await updatedUserService(dataUser, id);

  return res.json(instanceToPlain(user));
};

export {
  createUserController,
  loginUserController,
  listUserIdController,
  updatedUserController,
};
