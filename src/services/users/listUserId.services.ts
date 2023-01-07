import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import AppError from "../../errors/AppError";
import { IUserResponse } from "../../interfaces/user.interface";

const listUserIdService = async (userId: number): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      habits: true,
    },
  });

  if (!user) {
    throw new AppError("User nou found", 404);
  }

  return user;
};

export default listUserIdService;
