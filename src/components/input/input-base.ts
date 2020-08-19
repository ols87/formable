import { Field } from "../../field";

import {
  InputController,
  InputView,
  InputEvents,
  InputMeta,
  InputClass,
  InputProperty,
} from "./";

export class InputField extends Field implements InputClass {
  public view: InputView;

  public events: InputEvents;

  public meta: InputMeta;

  public controller: InputController;

  constructor(options: InputProperty) {
    super(options);
  }

  render(): InputField {
    return new InputField(this);
  }
}
