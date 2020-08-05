export function callEvent(key: string, name: string) {
  name = name.charAt(0).toUpperCase() + name.slice(1);

  if (this[key].events?.hasOwnProperty(`on${name}`)) {
    this[key].events[`on${name}`](this[key]);
  }

  this[`event${name}`].emit(this[key]);
}
