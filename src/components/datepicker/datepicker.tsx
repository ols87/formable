import {
  Component,
  h,
  Prop,
  Event,
  Element,
  EventEmitter,
  ComponentInterface,
} from "@stencil/core";
import Pikaday from "pikaday";
import moment from "moment";
import { DatepickerProperty } from "./types";
import { FieldEventOptions } from "field";
@Component({
  tag: "vf-datepicker",
  styleUrl: "../../../node_modules/pikaday/css/pikaday.css"
})
export class ComponentDatepicker implements ComponentInterface {
  @Prop() field: DatepickerProperty;

  @Element() datepickerElement: HTMLElement;

  @Event() eventClick: EventEmitter<DatepickerProperty>;
  @Event() eventFocus: EventEmitter<DatepickerProperty>;
  @Event() eventChange: EventEmitter<DatepickerProperty>;
  @Event() eventInput: EventEmitter<DatepickerProperty>;
  @Event() eventBlur: EventEmitter<DatepickerProperty>;
  @Event() eventInvalid: EventEmitter<DatepickerProperty>;
  @Event() eventOpen: EventEmitter<DatepickerProperty>;
  @Event() eventClose: EventEmitter<DatepickerProperty>;
  @Event() eventDraw: EventEmitter<DatepickerProperty>;

  componentDidLoad() {
    var picker = new Pikaday({
      field: this.datepickerElement.getElementsByClassName("vf-datepicker-container")[0],
      format: this.field.view.format ?? "YYYY/MM/DD",
      minDate: moment(
        this.field.view.minDate,
        this.field.view.format ?? "YYYY/MM/DD"
      ).toDate(),
      maxDate: moment(
        this.field.view.maxDate,
        this.field.view.format ?? "YYYY/MM/DD"
      ).toDate(),
      ...this.field.view.options,
      onSelect: () => {
        this.event("change", picker.toString());
      },
      onOpen: (date) => {
        this.event("open", date);
      },
      onClose: (date) => {
        this.event("close", date);
      },
      onDraw: (date) => {
        this.event("draw", date);
      },
    });

    if (this.field.value) {
      let format = this.field.view.format ?? "YYYY/MM/DD";
      let date = moment(this.field.value, format);

      if (date && date.isValid()) {
        picker.setDate(date.toDate());
      }
    }

    this.field.view.picker = picker;
  }

  event(name: string, event: any) {
    const eventOptions: FieldEventOptions = {
      name,
      value: name === "change" ? event : this.field.value,
      component: this,
    };

    if (name === "input") {
      if (!event.target.value) {
        eventOptions.value = "";
      }
    }

    if (name === "blur") {
      const input = this.datepickerElement.firstElementChild.getElementsByTagName("input")[0];

      if (input.value && input.value != this.field.value) {
        input.value = this.field.value ?? "";
      }
    }

    this.field.on(eventOptions);
  }

  connectedCallback() {
    if (this.field.view.picker) {
      this.field.view.picker.destroy();
    }
  }

  disconnectedCallback() {
    if (this.field.view.picker) {
      this.field.view.picker.destroy();
    }
  }

  render() {
    const { view, value } = this.field;

    return (
      <div
        class={`vf-field-wrapper vf-datepicker-wrapper ${
          view.classes?.wrapper ? view.classes?.wrapper : ""
        }`}
      >
        <label
          htmlFor={view.id}
          class={`vf-field-label vf-datepicker-label ${
            view.classes?.label ? view.classes?.label : ""
          }`}
        >
          {view.label}
        </label>

        <div class="vf-datepicker-container">
          <input
            autoComplete="off"
            class={view.classes?.field}
            id={view.id}
            name={view.id}
            required={view.required}
            disabled={view.disabled}
            value={value}
            onInput={(event) => this.event("input", event)}
            onClick={(event) => this.event("click", event)}
            onFocus={(event) => this.event("focus", event)}
            onBlur={(event) => this.event("blur", event)}
            onInvalid={(event) => this.event("invalid", event)}
          />
          <img
            class="datepicker-icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAo0lEQVRIie1VwQnDMBDThY6RLlLaBTqHkWdKPEgHCJ2k2eP6KAZzGDeOW0po9DudLB3GnIFfgeSd5NSqOxTOnhbOUtRJWnjvr6o6AOgXmlvMqsoQwi0SXdptNAeAXkSGlOisoME84lgK+Di+HpB9ReM4So5/B5Jque1f0R6wB2w1gOS51sg5d8nxdlXMeG3UiWRtRsQjLex/QCuoNReR1ZP9KZ7McilcJavkAgAAAABJRU5ErkJggg=="
          ></img>
        </div>

        <div class="vf-field-errors vf-datepicker-errors">
          {view.errors?.map((error: string) => (
            <div class="vf-field-error vf-datepicker-error">{error}</div>
          ))}
        </div>
      </div>
    );
  }
}
