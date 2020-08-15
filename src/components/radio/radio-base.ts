import { Field } from "field";

import {
  RadioController,
  RadioView,
  RadioEvents,
  RadioMeta,
  RadioClass,
  RadioProperty,
} from "./types";

export class RadioField extends Field implements RadioClass {
  public view: RadioView;

  public events: RadioEvents;

  public meta: RadioMeta;

  public controller: RadioController;

  constructor(options: RadioProperty) {
    super(options);
  }

  render(): RadioField {
    return new RadioField(this);
  }
}
