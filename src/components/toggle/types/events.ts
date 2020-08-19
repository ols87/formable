import { FieldEvents } from "./";

export interface ToggleEvents extends FieldEvents {
  onInvalid?: Function;
}
