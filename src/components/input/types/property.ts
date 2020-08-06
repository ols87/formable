import { FieldProperty } from "field/types";
import { InputEvents } from "./";
import { InputView } from "./view";

interface InputProp {
  view: InputView;
  events?: InputEvents;
}

export type InputProperty = FieldProperty & InputProp;
