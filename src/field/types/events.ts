import { ComponentInterface } from "@stencil/core";

export interface FieldEvents {
  onClick?: Function;
  onChange?: Function;
}

export interface FieldEventOptions {
  name: string;
  value: any;
  component: ComponentInterface;
}
