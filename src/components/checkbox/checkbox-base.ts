import { Field } from "field";

import {
  CheckboxController,
  CheckboxView,
  CheckboxEvents,
  CheckboxMeta,
  CheckboxClass,
  CheckboxProperty,
} from "./";

export class CheckboxField extends Field implements CheckboxClass {
  public view: CheckboxView;

  public events: CheckboxEvents;

  public meta: CheckboxMeta;

  public controller: CheckboxController;

  constructor(options: CheckboxProperty) {
    super(options);
  }

  render(): CheckboxField {
    return new CheckboxField(this);
  }
}
