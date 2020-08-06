export interface Validator {
  expression: Function; // (value) => /(\d{1,3}\.){3}\d{1,3}/.test(value)
  message: Function | string; // (value) => `${value} is not valid IP Address`
}
