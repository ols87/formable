import { FieldEvents } from "../../../field";

export declare interface InputEvents extends FieldEvents {
  onFocus?: Function;
  onInput?: Function;
  onBlur?: Function;
  onInvalid?: Function;
}
