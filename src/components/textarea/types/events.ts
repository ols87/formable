import { FieldEvents } from "../../../field";

export declare interface TextareaEvents extends FieldEvents {
  onFocus?: Function;
  onInput?: Function;
  onBlur?: Function;
  onInvalid?: Function;
}
