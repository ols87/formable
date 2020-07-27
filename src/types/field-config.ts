import { ValidationType } from "@utils/validation/types";
import {
  FormControlType,
  FormFieldOptionsType,
  FormFieldEventsType,
  SelectFieldOptionsType,
} from "./";

import { TextareaFieldConfigType } from "@components/textarea/types";
import { InputFieldConfigType } from "@components/input/types";
import { ComponentInterface } from "@stencil/core";

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

export interface SelectFieldConfigType extends FormFieldConfigType {
  options: SelectFieldOptionsType;
}

export interface FormFieldType {
  [key: string]: FormFieldConfigType | InputFieldConfigType | TextareaFieldConfigType | SelectFieldConfigType;
}
