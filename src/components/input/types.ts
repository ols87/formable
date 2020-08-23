import {
  FieldController,
  FieldProperty,
  FieldView,
  FieldEvents,
} from "../../field/types";

export interface InputView extends FieldView {
  type?: string;
  value?: string;
}

export interface InputEvents extends FieldEvents {
  onFocus?: Function;
  onInput?: Function;
  onBlur?: Function;
  onInvalid?: Function;
}

export interface InputProperty extends FieldProperty {
  view: InputView;
  events?: InputEvents;
}

export interface InputController extends FieldController {}

export type InputClass = InputProperty & InputController;
