import { FieldProperty } from "../../../field";
import { EditorEvents, EditorView } from "./";
import Quill from "quill";

export declare interface EditorProperty extends FieldProperty {
  view: EditorView;
  events?: EditorEvents;
  editor?: Quill;
  init?: Function;
  reset?: Function;
}
