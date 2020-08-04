import { FieldProperty } from "field/types/property";

interface InputRender {
  render: {
    type: string;
  };
}

export type InputProperty = FieldProperty & InputRender;
