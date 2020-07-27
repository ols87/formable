import { FormFieldEventsType } from "@type/.";

export interface TextareaFieldEventsType extends FormFieldEventsType {
  onBlur?: Function;
  onFocus?: Function;
  onInput?: Function;
}
