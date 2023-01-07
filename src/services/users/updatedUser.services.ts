import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import {
  IUserUpdated,
  IUserUpdatedResponse,
} from "../../interfaces/user.interface";

const updatedUserService = async (
  dataUser: IUserUpdated,
  idUser: number
): Promise<IUserUpdatedResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: idUser,
  });

  const updatedUser = userRepository.create({
    ...user,
    ...dataUser,
  });

  await userRepository.save(updatedUser);

  return updatedUser;
};

export default updatedUserService;
