import { Field } from "field";

import {
  EditorController,
  EditorView,
  EditorEvents,
  EditorMeta,
  EditorClass,
  EditorProperty,
} from "./types";

import Quill from "quill";

export class EditorField extends Field implements EditorClass {
  public view: EditorView;

  public editor: Quill;

  public events: EditorEvents;

  public meta: EditorMeta;

  public controller: EditorController;

  constructor(options: EditorProperty) {
    super(options);
  }

  render(): EditorField {
    return new EditorField(this);
  }
}
