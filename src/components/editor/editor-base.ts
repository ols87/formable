import { Field } from "field";

import {
  EditorController,
  EditorView,
  EditorEvents,
  EditorMeta,
  EditorClass,
  EditorProperty,
} from "./";

import Quill from "quill";

const DefaultToolbarOptions: any[] = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
];

export class EditorField extends Field implements EditorClass {
  public view: EditorView;

  public editor: Quill;

  public events: EditorEvents;

  public meta: EditorMeta;

  public controller: EditorController;

  constructor(options: EditorProperty) {
    super(options);

    this.editor = options.editor ? options.editor : null;
  }

  init(editorElement?: HTMLElement) {
    const toolbar = document.getElementsByClassName("ql-toolbar")[0];

    if (toolbar && this.editor) toolbar.remove();

    if (this.editor) return this.editor;

    const element = editorElement.firstElementChild.getElementsByClassName(
      "vf-editor-container"
    );

    const editor = new Quill(element[0], {
      modules: {
        toolbar: this.view.toolbarOptions || DefaultToolbarOptions,
      },
      placeholder: this.view.placeholder ?? "Enter...",
      theme: "snow",
    });

    if (this.view?.disabled) editor.disable();

    editor.pasteHTML(this.value ?? "");

    this.editor = editor;

    console.log(this);
  }

  reset() {
    this.editor.setText("");
    this.editor.blur();
    this.clear();
  }

  render(): EditorField {
    return new EditorField(this);
  }
}
