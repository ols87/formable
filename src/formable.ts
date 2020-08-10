import { Field, FormField } from "field";

export const Formable = {
  field(options: FormField) {
    const field = new Field(options);
    return { ...field };
  },
};

export * from "./field";
