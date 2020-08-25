import { Field } from "../../field";

import {
  TextareaView,
  TextareaEvents,
  TextareaClass,
  TextareaProperty,
} from "./types";

export class TextareaField extends Field implements TextareaClass {
  readonly type: string = "textarea";

  public view: TextareaView;

  public events: TextareaEvents;

  constructor(options: TextareaProperty) {
    super(options);
  }

  render(): any {
    return new TextareaField(this);
  }
}
