import { FieldView } from "field";

export interface InputView extends FieldView {
  type: string;
  value?: string;
}
