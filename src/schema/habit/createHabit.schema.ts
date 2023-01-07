import * as yup from "yup";
import { SchemaOf } from "yup";
import { IHabitRequest } from "../../interfaces/habit.interface";

const createHabitSchema: SchemaOf<IHabitRequest> = yup.object().shape({
  tittle: yup.string().required(),
  description: yup.string().required(),
  category: yup.string().required(),
  status: yup.string().notRequired(),
  userId: yup.string().required(),
});

export { createHabitSchema };
