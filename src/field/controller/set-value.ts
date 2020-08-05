import { FieldProperty } from "field/types";

export function setValue(key: string, value: any) {
  let field: FieldProperty = this[key];

  field.value = value;

  this[key] = { ...field };
}
