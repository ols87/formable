import { FieldView } from "field";

export interface RadioOption {
  value: any;
  label: any;
}

export interface RadioView extends FieldView {
  options: RadioOption[];
  value?: string;
}
