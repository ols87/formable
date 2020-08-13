import { InputField, InputProperty } from "components/input";
import { SelectProperty, SelectField } from "components/select";
import { EditorProperty, EditorField } from "components/editor";
import { CheckboxField, CheckboxProperty } from "components/checkbox";

export const Formable = {
  checkbox(options: CheckboxProperty) {
    return new CheckboxField(options);
  },
  editor(options: EditorProperty) {
    return new EditorField(options);
  },
  input(options: InputProperty) {
    return new InputField(options);
  },
  select(options: SelectProperty) {
    return new SelectField(options);
  },
};
