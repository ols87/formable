import {
  FieldController,
  FieldProperty,
  FieldView,
  FieldEvents,
} from "../../field/types";

export interface RadioOption {
  value: any;
  label: string;
}

export interface RadioView extends FieldView {
  options?: RadioOption[];
  value?: string;
}

export interface RadioEvents extends FieldEvents {
  onInvalid?: Function;
}

export interface RadioProperty extends FieldProperty {
  view: RadioView;
  events?: RadioEvents;
}

export interface RadioController extends FieldController {}

export type RadioClass = RadioProperty & RadioController;
