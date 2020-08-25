import { Field } from "../../field";

import { ToggleView, ToggleEvents, ToggleClass, ToggleProperty } from "./types";

export class ToggleField extends Field implements ToggleClass {
  readonly type: string = "toggle";

  public view: ToggleView;

  public events: ToggleEvents;

  constructor(options: ToggleProperty) {
    super(options);
  }

  render(): any {
    return new ToggleField(this);
  }
}
