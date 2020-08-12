import { Field } from "field";

import {
  InputController,
  InputView,
  InputEvents,
  InputMeta,
  InputClass,
  InputProperty,
} from "./types";

export class InputField extends Field implements InputClass {
  public view: InputView;

  public events: InputEvents;

  public meta: InputMeta;

  public validators: any;

  public controller: InputController;

  public value: any;

  constructor(options: InputProperty) {
    super(options);
  }
}
