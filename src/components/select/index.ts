import { Field } from "../../field";

import { SelectView, SelectEvents, SelectClass, SelectProperty } from "./types";

import { FieldComponent } from "../../field/types";

export class SelectField extends Field implements SelectClass {
  public type: FieldComponent = "select";

  public view: SelectView;

  public events: SelectEvents;

  constructor(options: SelectProperty) {
    super(options);
  }

  render(): SelectField {
    return new SelectField(this);
  }
}
