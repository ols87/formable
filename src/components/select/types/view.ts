import { FieldView } from "../../../field";

interface SelectOption {
  value: any;
  label: string;
}

export declare interface SelectView extends FieldView {
  options: SelectOption[];
  placeholder?: string;
  value?: string;
}
