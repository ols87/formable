import { FormFieldConfigType } from "@type/.";
import { TextareaFieldOptionsType, TextareaFieldEventsType } from ".";

export interface TextareaFieldConfigType extends FormFieldConfigType {
  options: TextareaFieldOptionsType;
  events?: TextareaFieldEventsType;
}