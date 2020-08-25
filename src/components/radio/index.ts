import { Field } from "../../field";

import { RadioView, RadioEvents, RadioClass, RadioProperty } from "./types";

import { FieldComponent } from "../../field/types";

export class RadioField extends Field implements RadioClass {
  public type: FieldComponent = "radio";

  public view: RadioView;

  public events: RadioEvents;

  constructor(options: RadioProperty) {
    super(options);
  }

  render(): RadioField {
    return new RadioField(this);
  }
}
