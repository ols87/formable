import { FieldEvents } from "../../../field";

export interface SelectEvents extends FieldEvents {
  onInvalid?: Function;
}
