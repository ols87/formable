import { InputProperty } from "components/input/types";
import { CheckboxProperty } from "components/checkbox/types";
import { DatepickerProperty } from "components/datepicker/types";
import { EditorProperty } from "components/editor/types";
import { RadioProperty } from "components/radio/types";
import { SelectProperty } from "components/select/types";
import { TextareaProperty } from "components/textarea/types";
import { ToggleProperty } from "components/toggle/types";
import { FieldComponent } from "field/types";

export type FormProperty = {
  [key in FieldComponent]?:
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
  fields: FormProperty;
  valid: boolean;
}

export interface FormController {
  submit: Function;
  validate: () => boolean;
  clear: () => FormClass;
  render: () => FormClass;
}

export type FormClass = FormFields & FormController;
