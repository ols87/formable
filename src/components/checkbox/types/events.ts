import { FieldEvents } from "field";

export interface CheckboxEvents extends FieldEvents {
  onInvalid?: Function;
}
