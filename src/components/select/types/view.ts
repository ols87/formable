import { FieldView } from "./";

interface SelectOption {
  value: any;
  label: string;
}

export interface SelectView extends FieldView {
  options: SelectOption[];
  placeholder?: string;
  value?: string;
}
