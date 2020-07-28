import { FormFieldEventsType } from "@type/.";

export interface InputFieldEventsType extends FormFieldEventsType {
  onBlur?: Function;
  onFocus?: Function;
  onInput?: Function;
}
