import { FieldView } from "../../../field";

export declare interface RadioOption {
  value: any;
  label: any;
}

export declare interface RadioView extends FieldView {
  options: RadioOption[];
  value?: string;
}
