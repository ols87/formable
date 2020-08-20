import { Field } from "../../field";

import {
  SelectController,
  SelectView,
  SelectEvents,
  SelectMeta,
  SelectClass,
  SelectProperty,
} from "./types";

export { SelectProperty } from "./types";

export class SelectField extends Field implements SelectClass {
  protected type: string = "select";

  public view: SelectView;

  public events: SelectEvents;

  public meta: SelectMeta;

  public controller: SelectController;

  constructor(options: SelectProperty) {
    super(options);
  }

  render(): SelectField {
    return new SelectField(this);
  }
}
