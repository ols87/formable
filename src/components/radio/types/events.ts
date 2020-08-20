import { FieldEvents } from "../../../field/types";

export interface RadioEvents extends FieldEvents {
  onInvalid?: Function;
}
