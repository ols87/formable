import { ComponentFieldInterface } from "../../types";

export function callEvent(eventName: string, event, self: ComponentFieldInterface) {
  if (eventName === "onBlur") {
    self.fieldConfig.formControl = {
      ...self.fieldConfig.formControl,
      touched: true,
    };

    self.checkValidation();
    self.setClassName();
  }

  if (self.fieldConfig.events && self.fieldConfig.events[eventName]) {
    self.fieldConfig.events[eventName](event);
  }
}
