import { Field } from "../../field";

import {
  ToggleController,
  ToggleView,
  ToggleEvents,
  ToggleMeta,
  ToggleClass,
  ToggleProperty,
} from "./";

export class ToggleField extends Field implements ToggleClass {
  public view: ToggleView;

  public events: ToggleEvents;

  public meta: ToggleMeta;

  public controller: ToggleController;

  constructor(options: ToggleProperty) {
    super(options);
  }
}
