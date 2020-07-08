import { ValidatorType, ValidationOptionsType } from './types';

import { regexDate, regexEmail, regexPhone, regexPassword } from './regex';

const regex: Function = (regex: RegExp, message: string): ValidatorType => {
  return {
    expression: (value: string) => ValidateRaw(regex, value),
    message,
  };
};

const required: Function = (message: string): ValidatorType => {
  return {
    expression: (value: string) => value,
    message,
  };
};

export function ValidateRaw(regex: RegExp, value: string): boolean {
  return regex.test(value);
}

export const Validation: ValidationOptionsType = {
  date: regex(regexDate, 'Invalid date'),
  email: regex(regexEmail, 'Invalid email'),
  phone: regex(regexPhone, 'Invalid phone number'),
  password: regex(regexPassword, 'Invalid password'),
  required: required('Required'),
};
