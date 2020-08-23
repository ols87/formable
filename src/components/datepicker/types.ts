import {
  FieldController,
  FieldProperty,
  FieldView,
  FieldEvents,
} from "../../field/types";

import Pikaday from "pikaday";

export interface DatepickerView extends FieldView {
  format?: string;
  minDate?: any;
  maxDate?: any;
  defaultDate?: string;
  options?: any;
  picker?: any;
}

export interface DatepickerEvents extends FieldEvents {
  onFocus?: Function;
  onBlur?: Function;
  onInput?: Function;
  onInvalid?: Function;
  onOpen?: Function;
  onClose?: Function;
  onDraw?: Function;
}

type PikadayMethods = "onSelect" | "onOpen" | "onClose" | "onDraw";

export type PikadyEvents = {
  [key in PikadayMethods]: (name: string, event: () => string) => void;
};

export interface DatepickerProperty extends FieldProperty {
  view: DatepickerView;
  events?: DatepickerEvents;
  picker?: Pikaday;
  init?: Function;
  destroy?: Function;
}

export interface DatepickerController extends FieldController {}

export type DatepickerClass = DatepickerProperty & DatepickerController;
