import { InputProperty } from "../input/types";
import { CheckboxProperty } from "../checkbox/types";
import { DatepickerProperty } from "../datepicker/types";
import { EditorProperty } from "../editor/types";
import { RadioProperty } from "../radio/types";
import { SelectProperty } from "../select/types";
import { TextareaProperty } from "../textarea/types";
import { ToggleProperty } from "../toggle/types";

export type FormProperty = {
  [key: string]:
    | CheckboxProperty
    | DatepickerProperty
    | EditorProperty
    | InputProperty
    | RadioProperty
    | SelectProperty
    | TextareaProperty
    | ToggleProperty;
};

export interface FormFields {
  fields: FormProperty & any;
  valid: boolean;
}

export interface FormController {
  submit: Function;
  validate: () => boolean;
  clear: () => FormClass;
  render: () => FormClass;
}

export type FormClass = FormFields & FormController;
