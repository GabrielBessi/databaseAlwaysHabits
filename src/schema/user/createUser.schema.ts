import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest } from "../../interfaces/user.interface";
import { hashSync } from "bcryptjs";

const createUserSchema: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  photo: yup.string(),
  email: yup.string().required(),
  activity: yup.string().required(),
  password: yup
    .string()
    .required()
    .transform((pass) => {
      return hashSync(pass, 10);
    }),
});

const createUserSchemaResponse: SchemaOf<IUserRequest> = yup.object().shape({
  id: yup.number(),
  name: yup.string().required(),
  photo: yup.string(),
  email: yup.string().required(),
  activity: yup.string().required(),
  password: yup.string().required(),
});

export { createUserSchema, createUserSchemaResponse };
