import { InputField, InputProperty } from "components/input";
import { SelectProperty, SelectField } from "components/select";
import { EditorProperty, EditorField } from "components/editor";

export const Formable = {
  input(options: InputProperty) {
    return new InputField(options);
  },
  select(options: SelectProperty) {
    return new SelectField(options);
  },
  editor(options: EditorProperty) {
    return new EditorField(options);
  },
};
