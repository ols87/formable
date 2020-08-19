export declare interface FieldController {
  set: (value: any) => any;
  get: Function;
  touch: Function;
  unTouch: Function;
  clear: Function;
  render: Function;
  on: (name: string, value: any) => string;
  validate: () => boolean;
}
