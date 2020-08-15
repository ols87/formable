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

export function initEditor() {
  const toolbar = document.getElementsByClassName("ql-toolbar")[0];

  if (toolbar) toolbar.remove();

  const element = this.editorElement.firstElementChild.getElementsByClassName(
    "vf-editor-container"
  );

  const editor = new Quill(element[0], {
    modules: {
      toolbar: this.field.view.toolbarOptions || DefaultToolbarOptions,
    },
    placeholder: this.field.view.placeholder ?? "Enter...",
    theme: "snow",
  });

  if (this.field.view?.disabled) editor.disable();

  editor.pasteHTML(this.field.value ?? "");

  editor.on("text-change", () => {
    this.event("change", editor.getLength() > 1 ? editor.root.innerHTML : "");
  });

  ["blur", "focus", "click"].forEach((handle) => {
    editor.root.addEventListener(handle, (event) => {
      this.event(handle, event);
    });
  });

  this.field.editor = editor;
}
