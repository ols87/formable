import { ValidationType } from "@utils/validation/types";
import {
  FormControlType,
  FormFieldOptionsType,
  FormFieldEventsType,
} from "./";

import { TextareaFieldConfigType } from "@components/textarea/types";
import { InputFieldConfigType } from "@components/input/types";
import { ComponentInterface } from "@stencil/core";
import { SelectFieldConfigType } from "@components/formable-select/types";
import { CheckboxFieldConfigType } from "@components/checkbox/types";
import { RadioFieldConfigType } from "@components/radio/types";

export interface FormFieldConfigType {
  type?: string;
  options: FormFieldOptionsType;
  events?: FormFieldEventsType;
  validators?: ValidationType;
  value?: any;
  formControl?: FormControlType;
}

export interface ComponentFieldInterface extends ComponentInterface {
  errorMessage: string;
  className: string;
  fieldConfig: InputFieldConfigType;
  callEvent: Function;
  checkValidation: Function;
  setClassName: Function;
  setValue: Function;
}

export interface FormFieldType {
  [key: string]: FormFieldConfigType | InputFieldConfigType | TextareaFieldConfigType | SelectFieldConfigType | CheckboxFieldConfigType | RadioFieldConfigType;
}
