import { Field } from "../../field";

import {
  ToggleController,
  ToggleView,
  ToggleEvents,
  ToggleMeta,
  ToggleClass,
  ToggleProperty,
} from "./types";

export class ToggleField extends Field implements ToggleClass {
  protected type: string = "toggle";

  public view: ToggleView;

  public events: ToggleEvents;

  public meta: ToggleMeta;

  public controller: ToggleController;

  constructor(options: ToggleProperty) {
    super(options);
  }

  render(): any {
    return new ToggleField(this);
  }
}
