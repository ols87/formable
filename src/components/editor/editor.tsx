import {
  Component,
  h,
  Prop,
  Event,
  EventEmitter,
  Element,
} from "@stencil/core";

import { EditorProperty } from "./types";
import { FieldEventOptions } from "field";
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

@Component({
  tag: "vf-editor",
  styleUrl: "../../../node_modules/quill/dist/quill.snow.css",
})
export class ComponentEditor {
  @Prop() field: EditorProperty;

  @Element() editorElement: HTMLElement;

  @Event() eventClick: EventEmitter<EditorProperty>;
  @Event() eventFocus: EventEmitter<EditorProperty>;
  @Event() eventChange: EventEmitter<EditorProperty>;
  @Event() eventBlur: EventEmitter<EditorProperty>;

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

  event(name: string, event: any) {
    let eventValue = name === "change" ? event : event.target.innerHTML;

    this.field.set(eventValue);

    const eventOptions: FieldEventOptions = {
      name,
      value: eventValue,
      component: this,
    };

    this.field.on(eventOptions);
  }

  render() {
    const { view } = this.field;

    return (
      <div
        class={`vf-field-wrapper vf-editor-wrapper ${
          view.classes?.wrapper ? view.classes?.wrapper : ""
        }`}
      >
        <label
          htmlFor={view.id}
          class={`vf-field-label vf-editor-label ${
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

        <div class="vf-field-errors vf-editor-errors">
          {view.errors?.map((error: string) => (
            <div class="vf-field-error vf-editor-error">{error}</div>
          ))}
        </div>
      </div>
    );
  }
}
