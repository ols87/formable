import { FormFieldOptionsType } from "@type/.";

export interface TextareaFieldOptionsType extends FormFieldOptionsType {
  rows?: number;
  cols?: number;
  autoExpand?: boolean;
}