import { FieldEvents } from "../../../field/types";

export interface CheckboxEvents extends FieldEvents {
  onInvalid?: Function;
}
