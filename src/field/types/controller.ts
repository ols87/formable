export interface FieldController {
  set: (value: any) => any;
  get: Function;
  touch: Function;
  unTouch: Function;
  clear: Function;
  render: Function;
  submit: Function;
  classes: () => string;
  on: (name: string, value: any) => string;
  validate: () => boolean;
}
