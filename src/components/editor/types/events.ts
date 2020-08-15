import { FieldEvents } from "field";

export interface EditorEvents extends FieldEvents {
  onFocus?: Function;
  onBlur?: Function;
}
