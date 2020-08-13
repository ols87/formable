import { FieldEventOptions } from "./";

export interface FieldController {
  set: (value: any) => any;
  get: Function;
  touch: Function;
  unTouch: Function;
  clear: Function;
  render: Function;
  on: (options: FieldEventOptions) => void;
  validate: () => boolean;
}
