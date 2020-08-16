import { FieldView } from "field/types";

export interface DatepickerView extends FieldView {
  format?: string;
  minDate?: any;
  maxDate?: any;
  defaultDate?: string;
  options?: any;
  picker?: any;
}
