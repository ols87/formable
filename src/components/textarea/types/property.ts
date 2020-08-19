import { FieldProperty } from "../../../field";
import { TextareaView, TextareaEvents } from "./";

export declare interface TextareaProperty extends FieldProperty {
  view: TextareaView;
  events?: TextareaEvents;
}
