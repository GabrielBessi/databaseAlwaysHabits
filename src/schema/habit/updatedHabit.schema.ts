import * as yup from "yup";
import { SchemaOf } from "yup";
import { IHabitUpdated } from "../../interfaces/habit.interface";

const updatedHabitSchema: SchemaOf<IHabitUpdated> = yup.object().shape({
  tittle: yup.string().notRequired(),
  description: yup.string().notRequired(),
  category: yup.string().notRequired(),
  status: yup.string().notRequired(),
});

export { updatedHabitSchema };
