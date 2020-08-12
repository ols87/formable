import { Field, FieldProperty } from "field";

import { InputProperty } from "components/input/types";
import { InputField } from "components/input/input-base";

export const Formable = {
  field(options: FieldProperty) {
    const field = new Field(options);
    return { ...field };
  },

  input(options: InputProperty) {
    const input = new InputField(options);
    return { ...input };
  },
};

export * from "./field";
