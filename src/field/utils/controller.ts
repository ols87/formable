export function setValue(key: string, value: any) {
  this[key].value = value;
  this[key] = { ...this[key] };
}
