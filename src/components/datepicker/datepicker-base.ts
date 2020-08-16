import { Field } from "field";

import {
  DatepickerController,
  DatepickerView,
  DatepickerEvents,
  DatepickerMeta,
  DatepickerClass,
  DatepickerProperty,
} from "./types";

export class DatepickerField extends Field implements DatepickerClass {
  public view: DatepickerView;

  public events: DatepickerEvents;

  public meta: DatepickerMeta;

  public controller: DatepickerController;

  constructor(options: DatepickerProperty) {
    super(options);
  }

  render(): any {
    return new DatepickerField(this);
  }
}
