import {
  Field,
  TextareaController,
  TextareaView,
  TextareaEvents,
  TextareaMeta,
  TextareaClass,
  TextareaProperty,
} from "./";

export class TextareaField extends Field implements TextareaClass {
  public view: TextareaView;

  public events: TextareaEvents;

  public meta: TextareaMeta;

  public controller: TextareaController;

  constructor(options: TextareaProperty) {
    super(options);
  }
}
