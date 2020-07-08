export interface ValidatorType {
  expression: Function; // expression: (value, ctr) => /(\d{1,3}\.){3}\d{1,3}/.test(value)
  message: Function | string; // message: (value, ctr) => `${value} is not valid IP Address`
}
