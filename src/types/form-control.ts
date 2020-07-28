export interface FormControlType {
  error?: {
    [key: string]: boolean;
  };
  touched?: boolean;
  valid?: boolean;
  markTouched?: Function;
  markUnTouched?: Function;
  submit?: Function;
  reset?: Function;
}

export interface FormGroupType {
  error?: {
    [key: string]: boolean;
  };
  touched?: boolean;
  valid?: boolean;
  getValue?: Function;
  markAllTouched?: Function;
  markAllUnTouched?: Function;
  submit?: Function;
  reset?: Function;
}
