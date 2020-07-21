import { ValidationType } from "@utils/validation/types";
import {
  FormControlType,
  FormFieldOptionsType,
  FormFieldEventsType,
  InputFieldOptionsType,
  TextareaFieldOptionsType,
  InputFieldEventsType,
  TextareaFieldEventsType,
} from "./";

export interface FormFieldConfigType {
  type?: string;
  options: FormFieldOptionsType;
  events?: FormFieldEventsType;
  validators?: ValidationType;
  value?: string;
  formControl?: FormControlType;
}

export interface InputFieldConfigType extends FormFieldConfigType {
  options: InputFieldOptionsType;
  events?: InputFieldEventsType;
}

export interface TextareaFieldConfigType extends FormFieldConfigType {
  options: TextareaFieldOptionsType;
  events?: TextareaFieldEventsType;
}

export interface FormFieldType {
  [key: string]: FormFieldConfigType | InputFieldConfigType | TextareaFieldConfigType;
}
