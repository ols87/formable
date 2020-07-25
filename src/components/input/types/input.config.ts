import { FormFieldConfigType } from "@type/.";
import { InputFieldOptionsType, InputFieldEventsType } from "../.";

export interface InputFieldConfigType extends FormFieldConfigType {
  options: InputFieldOptionsType;
  events?: InputFieldEventsType;
}
