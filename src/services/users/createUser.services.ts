import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import AppError from "../../errors/AppError";
import { IUserRequest } from "../../interfaces/user.interface";

const createUserServices = async (dataUser: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.create(dataUser);

  if (user) {
    throw new AppError("User already exists", 403);
  }

  await userRepository.save(user);

  return user;
};

export default createUserServices;
