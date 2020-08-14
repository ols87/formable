import { InputField, InputProperty } from "components/input";
import { SelectProperty, SelectField } from "components/select";
import { EditorProperty, EditorField } from "components/editor";
import { CheckboxField, CheckboxProperty } from "components/checkbox";
import { RadioProperty, RadioField } from "components/radio";

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
  radio(options: RadioProperty) {
    return new RadioField(options);
  },
  select(options: SelectProperty) {
    return new SelectField(options);
  },
};
