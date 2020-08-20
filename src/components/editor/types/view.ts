import { FieldView } from "../../../field/types";

export interface EditorView extends FieldView {
  style?: any;
  toolbarOptions?: any;
  placeholder?: string;
  value?: string;
}
