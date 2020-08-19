import { FieldProperty } from "../../../field";
import { TextareaView, TextareaEvents } from "./";

export interface TextareaProperty extends FieldProperty {
  view: TextareaView;
  events?: TextareaEvents;
}
