import { Field, FormField } from "field";

export const Formable = {
  field(options: FormField) {
    return new Field(options);
  },
};

export * from "./field";
