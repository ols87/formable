import { Field } from "../../field";

import {
  CheckboxView,
  CheckboxEvents,
  CheckboxClass,
  CheckboxProperty,
} from "./types";

export class CheckboxField extends Field implements CheckboxClass {
  readonly type: string = "checkbox";

  public view: CheckboxView;

  public events: CheckboxEvents;

  constructor(options: CheckboxProperty) {
    super(options);
  }

  render(): CheckboxField {
    return new CheckboxField(this);
  }
}
