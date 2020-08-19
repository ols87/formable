import { InputField, InputProperty } from "./components/input";
import { SelectProperty, SelectField } from "./components/select";
import { EditorProperty, EditorField } from "./components/editor";
import { CheckboxField, CheckboxProperty } from "./components/checkbox";
import { RadioProperty, RadioField } from "./components/radio";
import { ToggleProperty, ToggleField } from "./components/toggle";
import { TextareaProperty, TextareaField } from "./components/textarea";
import { DatepickerProperty, DatepickerField } from "./components/datepicker";

export * from "./field";
export * from "./validation";

export interface Formable {
  checkbox: (options: CheckboxProperty) => CheckboxField;
  datepicker: (options: DatepickerProperty) => DatepickerField;
  editor: (options: EditorProperty) => EditorField;
  input: (options: InputProperty) => InputField;
  radio: (options: RadioProperty) => RadioField;
  select: (options: SelectProperty) => SelectField;
  textarea: (options: TextareaProperty) => TextareaField;
  toggle: (options: ToggleProperty) => ToggleField;
}

export const Formable: Formable = {
  checkbox(options: CheckboxProperty) {
    return new CheckboxField(options);
  },
  datepicker(options: DatepickerProperty) {
    return new DatepickerField(options);
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
  textarea(options: TextareaProperty) {
    return new TextareaField(options);
  },
  toggle(options: ToggleProperty) {
    return new ToggleField(options);
  },
};
