import { FieldMeta } from "field/types";
import { FieldProperty } from "field/types";

export function setMeta(key: string) {
  const field: FieldProperty = this[key];

  const meta: FieldMeta = {
    touched: false,
    pristine: true,
    valid: true,
  };

  field.meta = meta;

  console.log(meta);

  this[key] = { ...field };
}
