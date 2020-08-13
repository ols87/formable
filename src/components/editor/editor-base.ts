import { Field } from "field";

import {
  EditorController,
  EditorView,
  EditorEvents,
  EditorMeta,
  EditorClass,
  EditorProperty,
} from "./types";

export class EditorField extends Field implements EditorClass {
  public view: EditorView;

  public events: EditorEvents;

  public meta: EditorMeta;

  public controller: EditorController;

  constructor(options: EditorProperty) {
    super(options);
  }
}
