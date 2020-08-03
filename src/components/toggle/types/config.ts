import { FormFieldConfigType, ComponentFieldInterface } from "@type/.";
import { ToggleFieldOptionsType } from ".";

export interface ToggleFieldConfigType extends FormFieldConfigType {
  options: ToggleFieldOptionsType;
}

export interface ComponentToggleInterface extends ComponentFieldInterface {
  checked: boolean;
  fieldConfig: ToggleFieldConfigType;
  onLabelClick: Function;
}
