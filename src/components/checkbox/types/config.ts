import { FormFieldConfigType, ComponentFieldInterface } from "@type/.";
import { CheckboxFieldOptionsType } from ".";

export interface CheckboxFieldConfigType extends FormFieldConfigType {
  options: CheckboxFieldOptionsType;
}

export interface ComponentCheckboxInterface extends ComponentFieldInterface {
  checked: boolean;
  fieldConfig: CheckboxFieldConfigType;
  onLabelClick: Function;
}
