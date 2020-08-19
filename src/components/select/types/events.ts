import { FieldEvents } from "./";

export interface SelectEvents extends FieldEvents {
  onInvalid?: Function;
}
