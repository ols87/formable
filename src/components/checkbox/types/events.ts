import { FieldEvents } from "./";

export interface CheckboxEvents extends FieldEvents {
  onInvalid?: Function;
}
