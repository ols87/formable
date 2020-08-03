import { FormFieldConfigType, ComponentFieldInterface } from "@type/.";
import { SelectFieldOptionsType } from ".";

export interface SelectFieldConfigType extends FormFieldConfigType {
  options: SelectFieldOptionsType;
}

export interface ComponentSelectInterface extends ComponentFieldInterface {
  fieldConfig: SelectFieldConfigType;
}
