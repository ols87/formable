import { FieldProperty } from "field/types";
import { DatepickerView, DatepickerEvents } from "./";
import Pikaday from "pikaday";

export interface DatepickerProperty extends FieldProperty {
  view: DatepickerView;
  events?: DatepickerEvents;
  picker?: Pikaday;
  init?: Function;
  destroy?: Function;
}
