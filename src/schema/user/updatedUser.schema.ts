import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IUserUpdated,
  IUserUpdatedResponse,
} from "../../interfaces/user.interface";
import { hashSync } from "bcryptjs";

const updatedUserSchema: SchemaOf<IUserUpdated> = yup.object().shape({
  name: yup.string().notRequired(),
  photo: yup.string().notRequired(),
  activity: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  password: yup
    .string()
    .notRequired()
    .transform((pass) => {
      return hashSync(pass, 10);
    }),
});

export { updatedUserSchema };
