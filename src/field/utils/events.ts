export function callEvent(name: string) {
  name = name.charAt(0).toUpperCase() + name.slice(1);

  if (this.field.events?.hasOwnProperty(`on${name}`)) {
    this.field.events[`on${name}`](this.field);
  }

  this[`event${name}`].emit(this.field);
}
