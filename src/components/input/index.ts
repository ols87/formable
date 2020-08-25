import { Field } from "../../field";

import { InputView, InputEvents, InputClass, InputProperty } from "./types";

export class InputField extends Field implements InputClass {
  readonly type: string = "input";

  public view: InputView;

  public events: InputEvents;

  constructor(options: InputProperty) {
    super(options);
  }

  render(): InputField {
    return new InputField(this);
  }
}
