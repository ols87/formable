import { Field } from "../../field";

import {
  TextareaController,
  TextareaView,
  TextareaEvents,
  TextareaMeta,
  TextareaClass,
  TextareaProperty,
} from "./types";

export * from "./types";

export class TextareaField extends Field implements TextareaClass {
  public view: TextareaView;

  public events: TextareaEvents;

  public meta: TextareaMeta;

  public controller: TextareaController;

  constructor(options: TextareaProperty) {
    super(options);
  }
}
