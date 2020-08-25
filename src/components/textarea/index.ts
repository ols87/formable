import { Field } from "../../field";

import {
  TextareaView,
  TextareaEvents,
  TextareaClass,
  TextareaProperty,
} from "./types";

import { FieldComponent } from "../../field/types";

export class TextareaField extends Field implements TextareaClass {
  public type: FieldComponent = "textarea";

  public view: TextareaView;

  public events: TextareaEvents;

  constructor(options: TextareaProperty) {
    super(options);
  }

  render(): any {
    return new TextareaField(this);
  }
}
