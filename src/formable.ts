import { InputField, InputProperty } from "components/input";

export const Formable = {
  input(options: InputProperty) {
    return new InputField(options);
  },
};
