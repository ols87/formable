import { Field } from "../../field";

import { InputView, InputEvents, InputClass, InputProperty } from "./types";

import { FieldComponent } from "../../field/types";

export class InputField extends Field implements InputClass {
  public type: FieldComponent = "input";

  public view: InputView;

  public events: InputEvents;

  constructor(options: InputProperty) {
    super(options);
  }

  render(): InputField {
    return new InputField(this);
  }
}
