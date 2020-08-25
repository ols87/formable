import { Field } from "../../field";

import { ToggleView, ToggleEvents, ToggleClass, ToggleProperty } from "./types";

import { FieldComponent } from "../../field/types";

export class ToggleField extends Field implements ToggleClass {
  public type: FieldComponent = "toggle";

  public view: ToggleView;

  public events: ToggleEvents;

  constructor(options: ToggleProperty) {
    super(options);
  }

  render(): any {
    return new ToggleField(this);
  }
}
