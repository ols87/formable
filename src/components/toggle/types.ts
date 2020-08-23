import {
  FieldController,
  FieldProperty,
  FieldView,
  FieldEvents,
} from "../../field/types";

export interface ToggleView extends FieldView {
  value?: boolean;
}

export interface ToggleEvents extends FieldEvents {
  onInvalid?: Function;
}

export interface ToggleProperty extends FieldProperty {
  view: ToggleView;
  events?: ToggleEvents;
}

export interface ToggleController extends FieldController {}

export type ToggleClass = ToggleProperty & ToggleController;
