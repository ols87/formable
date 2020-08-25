import {
  InputField,
  SelectField,
  EditorField,
  CheckboxField,
  RadioField,
  ToggleField,
  TextareaField,
  DatepickerField,
} from "./components/index";

import {
  InputProperty,
  SelectProperty,
  EditorProperty,
  CheckboxProperty,
  RadioProperty,
  ToggleProperty,
  TextareaProperty,
  DatepickerProperty,
} from "./components/types";

import { FormProperty, FormClass } from "./components/form/types";

import { Form } from "./components/form";

export interface Formable {
  form: (fields: FormProperty) => FormClass;
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
  form(fields: FormProperty) {
    return new Form(fields);
  },
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
