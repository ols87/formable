import { FieldProperty } from "./";
import { TextareaView, TextareaEvents } from "./";

export interface TextareaProperty extends FieldProperty {
  view: TextareaView;
  events?: TextareaEvents;
}
