import { FieldProperty } from "field/types";
import { EditorEvents } from "./";
import { EditorView } from "./view";

export interface EditorProperty extends FieldProperty {
  view: EditorView;
  events?: EditorEvents;
  editor?: any;
}
