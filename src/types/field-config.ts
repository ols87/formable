import { ValidationType } from "@utils/validation/types";
import {
  FormControlType,
  FormFieldOptionsType,
  FormFieldEventsType,
  TextareaFieldOptionsType,
  TextareaFieldEventsType,
} from "./";

import { InputFieldConfigType } from "@components/input";

export interface FormFieldConfigType {
  type?: string;
  options: FormFieldOptionsType;
  events?: FormFieldEventsType;
  validators?: ValidationType;
  value?: string;
  formControl?: FormControlType;
}

export interface TextareaFieldConfigType extends FormFieldConfigType {
  options: TextareaFieldOptionsType;
  events?: TextareaFieldEventsType;
}

export interface FormFieldType {
  [key: string]:
    | FormFieldConfigType
    | InputFieldConfigType
    | TextareaFieldConfigType;
}
