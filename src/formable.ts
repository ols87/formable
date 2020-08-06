import { FormField, Field } from "field/field";

export const Formable = {
  field(options: FormField) {
    return new Field(options);
  },
};
