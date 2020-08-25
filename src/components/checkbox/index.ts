import { Field } from "../../field";

import {
  CheckboxView,
  CheckboxEvents,
  CheckboxClass,
  CheckboxProperty,
} from "./types";

import { FieldComponent } from "../../field/types";

export class CheckboxField extends Field implements CheckboxClass {
  public type: FieldComponent = "checkbox";

  public view: CheckboxView;

  public events: CheckboxEvents;

  constructor(options: CheckboxProperty) {
    super(options);
  }

  render(): CheckboxField {
    return new CheckboxField(this);
  }
}
