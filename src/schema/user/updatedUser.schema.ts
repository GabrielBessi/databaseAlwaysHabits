import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IUserUpdated,
  IUserUpdatedResponse,
} from "../../interfaces/user.interface";

const updatedUserSchema: SchemaOf<IUserUpdated> = yup.object().shape({
  name: yup.string().notRequired(),
  photo: yup.string().notRequired(),
  activity: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  password: yup.string().notRequired(),
});

const userWhithoutPasswordSerializer: SchemaOf<IUserUpdatedResponse> = yup
  .object()
  .shape({
    id: yup.number().notRequired(),
    name: yup.string().notRequired(),
    photo: yup.string().notRequired(),
    activity: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
  });

export { updatedUserSchema, userWhithoutPasswordSerializer };
