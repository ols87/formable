import { FieldEvents } from "./";

export interface RadioEvents extends FieldEvents {
  onInvalid?: Function;
}
