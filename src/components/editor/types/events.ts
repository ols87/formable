import { FieldEvents } from "./";

export interface EditorEvents extends FieldEvents {
  onFocus?: Function;
  onBlur?: Function;
}
