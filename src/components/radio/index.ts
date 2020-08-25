import { Field } from "../../field";

import { RadioView, RadioEvents, RadioClass, RadioProperty } from "./types";

export class RadioField extends Field implements RadioClass {
  readonly type: string = "radio";

  public view: RadioView;

  public events: RadioEvents;

  constructor(options: RadioProperty) {
    super(options);
  }

  render(): RadioField {
    return new RadioField(this);
  }
}
