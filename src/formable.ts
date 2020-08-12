import { InputField, InputProperty } from "components/input";
import { SelectProperty, SelectField } from "components/select";

export const Formable = {
  input(options: InputProperty) {
    return new InputField(options);
  },
  select(options: SelectProperty) {
    return new SelectField(options);
  },
};
