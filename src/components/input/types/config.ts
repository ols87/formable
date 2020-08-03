import { FormFieldConfigType, ComponentFieldInterface } from "@type/.";
import { InputFieldOptionsType, InputFieldEventsType } from ".";

export interface InputFieldConfigType extends FormFieldConfigType {
  options: InputFieldOptionsType;
  events?: InputFieldEventsType;
}

export interface ComponentInputInterface extends ComponentFieldInterface {
  fieldConfig: InputFieldConfigType;
}
