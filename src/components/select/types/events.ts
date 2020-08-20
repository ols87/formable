import { FieldEvents } from "../../../field/types";

export interface SelectEvents extends FieldEvents {
  onInvalid?: Function;
}
