import {
  FieldController,
  FieldProperty,
  FieldView,
  FieldEvents,
} from "../../field/types";

export interface CheckboxView extends FieldView {
  value?: boolean;
}

export interface CheckboxEvents extends FieldEvents {
  onInvalid?: Function;
}

export interface CheckboxProperty extends FieldProperty {
  view: CheckboxView;
  events?: CheckboxEvents;
}

export interface CheckboxController extends FieldController {}

export type CheckboxClass = CheckboxProperty & CheckboxController;
