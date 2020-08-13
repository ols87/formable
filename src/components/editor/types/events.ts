import { FieldEvents } from "field/types";

export interface EditorEvents extends FieldEvents {
  onFocus?: Function;
  onBlur?: Function;
}
