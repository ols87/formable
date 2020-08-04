export function componentWillLoad() {
  this.fieldConfig.formControl = {
    error: null,
    touched: false,
    valid: this.fieldConfig.options?.required ? false : true,
  };

  this.fieldConfig.formControl.markTouched = () => {
    this.fieldConfig.formControl.touched = true;

    this.checkValidation();

    this.setClassName();
  };

  this.fieldConfig.formControl.markUnTouched = () => {
    this.fieldConfig.formControl.touched = false;

    this.errorMessage = null;

    this.setClassName();
  };

  this.fieldConfig.formControl.submit = () => {
    this.fieldConfig.formControl.touched = true;

    this.checkValidation();

    this.setClassName();
  };

  this.fieldConfig.formControl.reset = () => {
    this.fieldConfig.formControl.error = null;

    this.fieldConfig.formControl.touched = false;

    this.fieldConfig.formControl.valid = this.fieldConfig.options?.required
      ? false
      : true;

    this.fieldConfig.value = undefined;

    this.errorMessage = null;

    this.setClassName();
  };
}
