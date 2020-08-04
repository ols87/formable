export function callEvent(eventName: string, event: CustomEvent) {
  if (eventName === "onBlur") {
    this.fieldConfig.formControl = {
      ...this.fieldConfig.formControl,
      touched: true,
    };

    this.checkValidation.bind(this)();

    this.setClassName();
  }

  if (this.fieldConfig.events && this.fieldConfig.events[eventName]) {
    this.fieldConfig.events[eventName](event);
  }
}
