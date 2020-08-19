import { FieldEvents } from "../../../field";

export declare interface DatepickerEvents extends FieldEvents {
  onFocus?: Function;
  onBlur?: Function;
  onInput?: Function;
  onInvalid?: Function;
  onOpen?: Function;
  onClose?: Function;
  onDraw?: Function;
}

type PikadayMethods = "onSelect" | "onOpen" | "onClose" | "onDraw";

export declare type PikadyEvents = {
  [key in PikadayMethods]: (name: string, event: () => string) => void;
};
