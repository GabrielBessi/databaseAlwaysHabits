import * as yup from "yup";
import { SchemaOf } from "yup";
import { ILoginRequest } from "../../interfaces/user.interface";

const loginUserSchema: SchemaOf<ILoginRequest> = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export { loginUserSchema };
