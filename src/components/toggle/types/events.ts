import { FieldEvents } from "field/types";

export interface ToggleEvents extends FieldEvents {
  onInvalid?: Function;
}
