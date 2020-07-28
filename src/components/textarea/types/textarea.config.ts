import { FormFieldConfigType, ComponentFieldInterface } from "@type/.";
import { TextareaFieldOptionsType, TextareaFieldEventsType } from ".";

export interface TextareaFieldConfigType extends FormFieldConfigType {
  options: TextareaFieldOptionsType;
  events?: TextareaFieldEventsType;
}

export interface ComponentTextareaInterface extends ComponentFieldInterface {
  lineHeight: number;
  rows: number;
  hiddenValue: string;
  el: HTMLElement;
  fieldConfig: TextareaFieldConfigType;
}