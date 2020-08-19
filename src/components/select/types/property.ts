import { FieldProperty } from "../../../field";
import { SelectView, SelectEvents } from "./";

export declare interface SelectProperty extends FieldProperty {
  view: SelectView;
  events?: SelectEvents;
}
