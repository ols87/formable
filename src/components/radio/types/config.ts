import { FormFieldConfigType, ComponentFieldInterface } from "@type/.";
import { RadioFieldOptionsType } from ".";

export interface RadioFieldConfigType extends FormFieldConfigType {
  options: RadioFieldOptionsType;
}

export interface ComponentRadioInterface extends ComponentFieldInterface {
  checked: boolean;
  fieldConfig: RadioFieldConfigType;
  onLabelClick: Function;
}
