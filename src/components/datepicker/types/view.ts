import { FieldView } from "field";

export interface DatepickerView extends FieldView {
  format?: string;
  minDate?: any;
  maxDate?: any;
  defaultDate?: string;
  options?: any;
  picker?: any;
}
