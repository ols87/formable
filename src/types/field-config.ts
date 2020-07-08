import { ValidationType } from '@utils/validation/types';
import { FormControlType, FormFieldOptionsType, FormFieldEventsType } from './';

export interface FormFieldConfigType {
  options: FormFieldOptionsType;
  events?: FormFieldEventsType;
  validators?: ValidationType;
  value?: string;
  formControl?: FormControlType;
}

export interface FormFieldType {
  [key: string]: FormFieldConfigType;
}
