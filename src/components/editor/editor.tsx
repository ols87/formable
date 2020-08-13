import {
  Component,
  h,
  State,
  Prop,
  Event,
  EventEmitter,
  Element,
} from "@stencil/core";
import Quill from "quill";
import { EditorProperty } from "./types";

const DefaultToolbarOptions: any[] = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
];

@Component({
  tag: "vf-editor",
  styleUrl: "../../../node_modules/quill/dist/quill.snow.css",
})
export class ComponentEditor {
  @State() isReset: boolean;

  @Prop() field: EditorProperty;

  @Element() editorElement: HTMLElement;

  @Event() eventClick: EventEmitter<EditorProperty>;
  @Event() eventFocus: EventEmitter<EditorProperty>;
  @Event() eventChange: EventEmitter<EditorProperty>;
  @Event() eventBlur: EventEmitter<EditorProperty>;

  componentWillLoad() {}

  componentDidLoad() {
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

    if (this.field.view?.disabled) {
      editor.disable();
    }

    editor.pasteHTML(this.field.value ?? "");

    editor.on("text-change", () => {
      if (this.isReset) {
        this.isReset = false;
        return;
      }

      this.event("change", editor.getLength() > 1 ? editor.root.innerHTML : "");
    });

    editor.root.addEventListener("blur", (event) => {
      this.event("blur", event);
    });

    editor.root.addEventListener("focus", (event) => {
      this.event("focus", event);
    });

    editor.root.addEventListener("click", (event) => {
      this.event("click", event);
    });

    this.field.editor = editor;
  }

  event(name: string, event: any) {
    this.field.set(name === "change" ? event : event.target.value);

    name = this.field.on(name);

    this[`event${name}`].emit(this.field);
  }

  clear() {
    this.isReset = true;
    this.field.editor.setText("");
    this.field.editor.blur();
  }

  render() {
    const { view } = this.field;

    return (
      <div
        class={`vf-field-wrapper vf-input-wrapper ${
          view.classes?.wrapper ? view.classes?.wrapper : ""
        }`}
      >
        <label
          class={`vf-field-label vf-input-label ${
            view.classes?.label ? view.classes?.label : ""
          }`}
        >
          {view.label}
        </label>

        <div class={view.classes?.field}>
          <div
            class="vf-editor-container"
            id={view.id}
            style={view.style}
          ></div>
        </div>

        <div class="vf-field-errors vf-input-errors">
          {view.errors?.map((error: string) => (
            <div class="vf-field-error vf-input-error">{error}</div>
          ))}
        </div>
      </div>
    );
  }
}
