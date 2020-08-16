import { FieldEvents } from "field/types";

export interface DatepickerEvents extends FieldEvents {
  onFocus?: Function;
  onBlur?: Function;
  onInput?: Function;
  onInvalid?: Function;
  onOpen?: Function;
  onClose?: Function;
  onDraw?: Function;
}
