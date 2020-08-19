import { FieldView } from "./";

export interface EditorView extends FieldView {
  style?: any;
  toolbarOptions?: any;
  placeholder?: string;
  value?: string;
}
