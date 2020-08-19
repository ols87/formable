import { FieldEvents } from "../../../field";

export interface ToggleEvents extends FieldEvents {
  onInvalid?: Function;
}
