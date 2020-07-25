export interface FormFieldOptionsType {
  id?: any;
  label?: string;
  required?: boolean;
  disabled?: boolean;
}

export interface TextareaFieldOptionsType extends FormFieldOptionsType {
  rows?: number;
  cols?: number;
  autoExpand?: boolean;
}
