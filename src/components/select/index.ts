import { Field } from "../../field";

import { SelectView, SelectEvents, SelectClass, SelectProperty } from "./types";

export { SelectProperty } from "./types";

export class SelectField extends Field implements SelectClass {
  protected type: string = "select";

  public view: SelectView;

  public events: SelectEvents;

  constructor(options: SelectProperty) {
    super(options);
  }

  render(): SelectField {
    return new SelectField(this);
  }
}
