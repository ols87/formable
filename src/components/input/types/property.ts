import { FieldProperty } from "field/types";
import { InputEvents } from "./";

interface InputProp {
  render: {
    type: string;
  };
  events?: InputEvents;
}

export type InputProperty = FieldProperty & InputProp;
