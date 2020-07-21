export interface FormFieldEventsType {
  onChange?: Function;
  onClick?: Function;
}

export interface InputFieldEventsType extends FormFieldEventsType {
  onBlur?: Function;
  onFocus?: Function;
  onInput?: Function;
}

export interface TextareaFieldEventsType extends FormFieldEventsType {
  onBlur?: Function;
  onFocus?: Function;
  onInput?: Function;
}