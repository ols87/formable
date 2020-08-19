import { FieldProperty } from "field";

export interface DynamicFormProperty {
  [key: string]: any;
}

export interface FormProperty {
  [key: string]: FieldProperty & DynamicFormProperty;
}
