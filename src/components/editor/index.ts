import { Field } from "../../field";

import { EditorView, EditorEvents, EditorClass, EditorProperty } from "./types";

import { FieldComponent } from "../../field/types";

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
  public type: FieldComponent = "editor";

  public view: EditorView;

  public editor: Quill;

  public events: EditorEvents;

  constructor(options: EditorProperty) {
    super(options);

    this.editor = options.editor || this.editor;
  }

  init(editorElement?: HTMLElement) {
    if (this.editor) return this.editor;

    const toolbar = editorElement.firstElementChild.getElementsByClassName(
      "ql-toolbar"
    );

    if (toolbar.length > 0) toolbar[0].remove();

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

    const html = this.value ?? "";

    const value = editor.clipboard.convert(html);

    editor.setContents(value);

    this.editor = editor;

    return this.editor;
  }

  content(): string {
    return this.editor.getLength() > 1 ? this.editor.root.innerHTML : "";
  }

  clear() {
    this.editor.setText("");

    this.editor.blur();

    return super.clear();
  }

  render(): EditorField {
    return new EditorField(this);
  }
}
