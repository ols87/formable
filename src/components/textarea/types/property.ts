import { FieldProperty } from "field/types";
import { TextareaView, TextareaEvents } from "./";

export interface TextareaProperty extends FieldProperty {
  view: TextareaView;
  events?: TextareaEvents;
}
