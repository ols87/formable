import {
  FieldController,
  FieldProperty,
  FieldView,
  FieldEvents,
} from "../../field/types";

export interface SelectOption {
  [key: string]: any;
}

export interface SelectView extends FieldView {
  keys?: SelectOption;
  options?: SelectOption[];
  placeholder?: string;
  value?: string;
}

export interface SelectEvents extends FieldEvents {
  onInvalid?: Function;
}

export interface SelectProperty extends FieldProperty {
  view: SelectView;
  events?: SelectEvents;
}

export interface SelectController extends FieldController {}

export type SelectClass = SelectProperty & SelectController;
