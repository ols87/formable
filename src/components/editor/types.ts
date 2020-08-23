import {
  FieldController,
  FieldProperty,
  FieldView,
  FieldEvents,
} from "../../field/types";

import Quill from "quill";

export interface EditorView extends FieldView {
  style?: any;
  toolbarOptions?: any;
  placeholder?: string;
  value?: string;
}

export interface EditorEvents extends FieldEvents {
  onFocus?: Function;
  onBlur?: Function;
}

export interface EditorProperty extends FieldProperty {
  view: EditorView;
  events?: EditorEvents;
  editor?: Quill;
  init?: Function;
  reset?: Function;
}

export interface EditorController extends FieldController {}

export type EditorClass = EditorProperty & EditorController;
