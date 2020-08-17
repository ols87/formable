import { FieldView } from "field/types";

export interface TextareaView extends FieldView {
  rows?: number;
  cols?: number;
}
