import { FieldView } from "../../../field";

export interface TextareaView extends FieldView {
  rows?: number;
  cols?: number;
}
