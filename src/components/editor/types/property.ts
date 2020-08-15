import { FieldProperty } from "field";
import { EditorEvents, EditorView } from "./";
import Quill from "quill";

export interface EditorProperty extends FieldProperty {
  view: EditorView;
  events?: EditorEvents;
  editor?: Quill;
}
