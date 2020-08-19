import { Field } from "../../field";

import {
  DatepickerController,
  DatepickerView,
  DatepickerEvents,
  DatepickerMeta,
  DatepickerClass,
  DatepickerProperty,
} from "./";

import Pikaday from "pikaday";
import moment from "moment";

export class DatepickerField extends Field implements DatepickerClass {
  public view: DatepickerView;

  public picker: Pikaday;

  public events: DatepickerEvents;

  public meta: DatepickerMeta;

  public controller: DatepickerController;

  constructor(options: DatepickerProperty) {
    super(options);

    this.picker = options.picker ? options.picker : null;
  }

  init(
    datepickerElement: HTMLElement,
    events: { [key: string]: () => Function }
  ) {
    const options: Pikaday.PikadayOptions = {
      field: datepickerElement.getElementsByClassName(
        "vf-datepicker-container"
      )[0],
      format: this.view.format ?? "YYYY/MM/DD",
      minDate: moment(
        this.view.minDate,
        this.view.format ?? "YYYY/MM/DD"
      ).toDate(),
      maxDate: moment(
        this.view.maxDate,
        this.view.format ?? "YYYY/MM/DD"
      ).toDate(),
      ...this.view.options,
    };

    this.picker = new Pikaday({
      ...options,
      ...events,
    });

    if (this.value) {
      const format = this.view.format ?? "DD/MM/YYYY";
      const date = moment(this.value, format);

      if (date && date.isValid()) {
        this.picker.setDate(date.toDate());
      }
    }
  }

  destroy() {
    if (this.view.picker) this.picker.destroy();
  }

  render(): any {
    return new DatepickerField(this);
  }
}
