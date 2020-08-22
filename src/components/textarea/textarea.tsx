import {
  Component,
  h,
  Prop,
  Event,
  EventEmitter,
  ComponentInterface,
} from "@stencil/core";
import { TextareaProperty } from "./types";

@Component({
  tag: "vf-textarea",
})
export class ComponentTextarea implements ComponentInterface {
  @Prop() field: TextareaProperty;

  @Event() eventClick: EventEmitter<TextareaProperty>;
  @Event() eventFocus: EventEmitter<TextareaProperty>;
  @Event() eventInput: EventEmitter<TextareaProperty>;
  @Event() eventChange: EventEmitter<TextareaProperty>;
  @Event() eventBlur: EventEmitter<TextareaProperty>;
  @Event() eventInvalid: EventEmitter<TextareaProperty>;

  event(name: string, event: any) {
    const handle = this.field.on(name, event.target.value);

    this[`event${handle}`].emit(this.field);
  }

  render() {
    const { view, value } = this.field;

    return (
      <div
        class={`vf-field-wrapper vf-textarea-wrapper ${
          view.classes?.wrapper ?? ""
        }  ${this.field.classes()}`}
      >
        <label
          htmlFor={view.id}
          class={`vf-field-label vf-textarea-label ${
            view.classes?.label ? view.classes?.label : ""
          }`}
        >
          {view.label}
        </label>

        <textarea
          class={view.classes?.field}
          id={view.id}
          name={view.id}
          required={view.required}
          disabled={view.disabled}
          value={value}
          rows={view.rows}
          cols={view.cols}
          onClick={(event) => this.event("click", event)}
          onFocus={(event) => this.event("focus", event)}
          onInput={(event) => this.event("input", event)}
          onChange={(event) => this.event("change", event)}
          onBlur={(event) => this.event("blur", event)}
          onInvalid={(event) => this.event("invalid", event)}
        ></textarea>

        <div class="vf-field-errors vf-textarea-errors">
          {view.errors?.map((error: string) => (
            <div class="vf-field-error vf-textarea-error">{error}</div>
          ))}
        </div>
      </div>
    );
  }
}
