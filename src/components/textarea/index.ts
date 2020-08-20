import { Field } from "../../field";

import {
  TextareaController,
  TextareaView,
  TextareaEvents,
  TextareaMeta,
  TextareaClass,
  TextareaProperty,
} from "./types";

export class TextareaField extends Field implements TextareaClass {
  protected type: string = "textarea";

  public view: TextareaView;

  public events: TextareaEvents;

  public meta: TextareaMeta;

  public controller: TextareaController;

  constructor(options: TextareaProperty) {
    super(options);
  }

  render(): any {
    return new TextareaField(this);
  }
}
