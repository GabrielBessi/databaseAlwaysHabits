import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest } from "../interfaces/user.interface";

const createUserSchema: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  photo: yup.string(),
  email: yup.string().required(),
  activity: yup.string().required(),
  password: yup.string().required(),
});

export { createUserSchema };
