export interface FormControlType {
  error?: {
    [key: string]: boolean;
  };
  touched?: boolean;
  valid?: boolean;
  markTouched?: Function;
  markUnTouched?: Function;
  submit?: Function;
}
