import * as field from "@utils/field/init";

export function componentWillLoad() {
  field.componentWillLoad.bind(this)();

  this.fieldConfig.formControl.reset = () => {
    this.fieldConfig.formControl.error = null;

    this.fieldConfig.formControl.touched = false;

    this.fieldConfig.formControl.valid = this.fieldConfig.options?.required
      ? false
      : true;

    this.fieldConfig.value = undefined;

    this.errorMessage = null;

    this.checked = false;

    this.setClassName();
  };

  this.setClassName();
}
