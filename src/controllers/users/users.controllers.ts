import { Request, Response } from "express";
import createUserServices from "../../services/users/createUser.services";
import { IUserRequest } from "../../interfaces/user.interface";

const createUserController = async (req: Request, res: Response) => {
  const dataUser: IUserRequest = req.body;

  const newUser = await createUserServices(dataUser);

  return res.json(newUser);
};

export { createUserController };
