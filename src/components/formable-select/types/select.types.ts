import { FormFieldOptionsType } from "@type/.";

export interface SelectItemType {
  value: any;
  label: string;
}

export interface SelectFieldOptionsType extends FormFieldOptionsType {
  data: SelectItemType[]
}