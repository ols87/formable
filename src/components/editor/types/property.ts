import { FieldProperty } from "field";
import { EditorClass, EditorEvents, EditorView } from "./";
import Quill from "quill";

type EditorProp = FieldProperty & Partial<EditorClass>;

export interface EditorProperty extends EditorProp {
  view: EditorView;
  events?: EditorEvents;
  editor?: Quill;
}
