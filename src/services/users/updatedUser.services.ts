import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import {
  IUserUpdated,
  IUserUpdatedResponse,
} from "../../interfaces/user.interface";
import { userWhithoutPasswordSerializer } from "../../schema/user/updatedUser.schema";

const updatedUserService = async (
  dataUser: IUserUpdated,
  idUser: number
): Promise<IUserUpdatedResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: idUser,
  });

  console.log(dataUser);
  const updatedUser = userRepository.create({
    ...user,
    ...dataUser,
  });

  await userRepository.save(updatedUser);

  // const updatedWithoutPassword = await userWhithoutPasswordSerializer.validate(
  //   updatedUser,
  //   {
  //     stripUnknown: true,
  //   }
  // );

  // console.log(updatedWithoutPassword);

  return updatedUser;
};

export default updatedUserService;
