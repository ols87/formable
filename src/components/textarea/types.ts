import {
  FieldController,
  FieldProperty,
  FieldView,
  FieldEvents,
} from "../../field/types";

export interface TextareaView extends FieldView {
  rows?: number;
  cols?: number;
}

export interface TextareaEvents extends FieldEvents {
  onFocus?: Function;
  onInput?: Function;
  onBlur?: Function;
  onInvalid?: Function;
}

export interface TextareaProperty extends FieldProperty {
  view: TextareaView;
  events?: TextareaEvents;
}

export interface TextareaController extends FieldController {}

export type TextareaClass = TextareaProperty & TextareaController;
