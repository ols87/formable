import { Field } from "field";

import {
  SelectController,
  SelectView,
  SelectEvents,
  SelectMeta,
  SelectClass,
  SelectProperty,
} from "./";

export class SelectField extends Field implements SelectClass {
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