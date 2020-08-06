export interface FieldController {
  set: (value: any) => any;
  get: Function;
  touch: Function;
  unTouch: Function;
  clear: Function;
  render: Function;
  on: (name: string) => string;
  validate: () => boolean;
}
