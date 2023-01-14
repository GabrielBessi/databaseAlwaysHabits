import "dotenv/config";
import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import AppError from "../../errors/AppError";
import { ILoginRequest } from "../../interfaces/user.interface";
import jwt from "jsonwebtoken";

const loginUserService = async (dataLogin: ILoginRequest): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: dataLogin.email,
  });

  if (!user) {
    throw new AppError("Email invalid", 401);
  }

  const validatePassword = await compare(dataLogin.password, user.password);

  if (!validatePassword) {
    throw new AppError("Password invalid", 401);
  }

  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.SECRET_KEY,
    {
      subject: user.id.toString(),
      expiresIn: "1h",
    }
  );

  return token;
};

export default loginUserService;
