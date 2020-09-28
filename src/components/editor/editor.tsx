import {
  Component,
  h,
  Prop,
  Event,
  EventEmitter,
  Element,
  ComponentInterface,
} from "@stencil/core";

import { EditorProperty } from "./types";

@Component({
  tag: "vf-editor",
  styleUrl: "../../../node_modules/quill/dist/quill.snow.css",
})
export class ComponentEditor implements ComponentInterface {
  @Prop() field: EditorProperty;

  @Element() editorElement: HTMLElement;

  @Event() eventClick: EventEmitter<EditorProperty>;
  @Event() eventFocus: EventEmitter<EditorProperty>;
  @Event() eventChange: EventEmitter<EditorProperty>;
  @Event() eventBlur: EventEmitter<EditorProperty>;
  @Event() fieldChange: EventEmitter<EditorProperty>;

  init() {
    this.field.editor = this.field.init(this.editorElement);

    this.field.editor.on("text-change", () => {
      this.event(
        "change",
        this.field.editor?.getLength() > 1
          ? this.field.editor.root.innerHTML
          : ""
      );
    });

    ["blur", "focus", "click"].forEach((handle) => {
      this.field.editor.root.addEventListener(handle, (event) => {
        this.event(handle, event);
      });
    });
  }

  event(name: string, event: any) {
    let eventValue = name === "change" ? event : event.target.innerHTML;

    if (eventValue === "<p><br></p>" || eventValue === "<br>")
      eventValue = null;

    const handle = this.field.on(name, eventValue);

    this[`event${handle}`].emit(this.field);

    this.fieldChange.emit(this.field);
  }

  render() {
    const { view } = this.field;

    return (
      <div
        class={`vf-field-wrapper vf-editor-wrapper ${
          view.classes?.wrapper ?? ""
        }  ${this.field.classes()}`}
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

  async connectedCallback() {
    if (this.field?.lifecycle?.connectedCallback)
      await this.field.lifecycle.connectedCallback();
  }

  async disconnectedCallback() {
    if (this.field?.lifecycle?.disconnectedCallback)
      await this.field.lifecycle.disconnectedCallback();
  }

  async componentWillLoad() {
    if (this.field?.lifecycle?.componentWillLoad)
      await this.field.lifecycle.componentWillLoad();
  }

  async componentDidLoad() {
    if (this.field?.lifecycle?.componentDidLoad)
      await this.field.lifecycle.componentDidLoad();
  }

  componentShouldUpdate(newVal: any, oldVal: any, propName: string) {
    if (this.field?.lifecycle?.componentShouldUpdate)
      this.field.lifecycle.componentShouldUpdate(newVal, oldVal, propName);
  }

  async componentWillRender() {
    if (this.field?.lifecycle?.componentWillRender)
      await this.field.lifecycle.componentWillRender();
  }

  async componentDidRender() {
    this.init();

    if (this.field?.lifecycle?.componentDidRender)
      await this.field.lifecycle.componentDidRender();
  }

  async componentWillUpdate() {
    if (this.field?.lifecycle?.componentWillUpdate)
      await this.field.lifecycle.componentWillUpdate();
  }

  async componentDidUpdate() {
    if (this.field?.lifecycle?.componentDidUpdate)
      await this.field.lifecycle.componentDidUpdate();
  }
}
