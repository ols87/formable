import { FormFieldEventsType } from "@type/.";

export interface SelectFieldEventsType extends FormFieldEventsType {
  onBlur?: Function;
  onFocus?: Function;
}
