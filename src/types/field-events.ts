export interface FormFieldEventsType {
  onChange?: Function;
  onClick?: Function;
}

export interface TextareaFieldEventsType extends FormFieldEventsType {
  onBlur?: Function;
  onFocus?: Function;
  onInput?: Function;
}
