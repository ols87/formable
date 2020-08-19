import { FieldEvents } from "../../../field";

export interface RadioEvents extends FieldEvents {
  onInvalid?: Function;
}
