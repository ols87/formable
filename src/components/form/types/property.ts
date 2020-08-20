import { FieldProperty } from "../../../field/types";

export interface DynamicFormProperty {
  [key: string]: any;
}

export interface FormProperty {
  [key: string]: FieldProperty & DynamicFormProperty;
}
