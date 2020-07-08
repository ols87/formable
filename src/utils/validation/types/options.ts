import { ValidatorType } from './validator';

export interface ValidationOptionsType {
  date: ValidatorType;
  email: ValidatorType;
  phone: ValidatorType;
  password: ValidatorType;
  required: ValidatorType;
}
