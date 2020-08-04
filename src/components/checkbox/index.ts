import { componentWillLoad, callEvent, checkRequired } from "./utils";

const modules = {
  componentWillLoad,
  callEvent,
  checkRequired,
};

export function CheckboxCtrl(): Object {
  Object.keys(modules).forEach(
    (key) => (modules[key] = modules[key].bind(this))
  );

  return modules;
}
