import { ComponentFieldInterface } from "../../types";

export function componentWillLoad(self: ComponentFieldInterface) {
  self.fieldConfig.formControl = {
    error: null,
    touched: false,
    valid: false,
  };

  self.fieldConfig.formControl.markTouched = () => {
    self.fieldConfig.formControl.touched = true;
    self.checkValidation();
    self.setClassName();
  };

  self.fieldConfig.formControl.markUnTouched = () => {
    self.fieldConfig.formControl.touched = false;
    self.errorMessage = null;
    self.setClassName();
  };

  self.fieldConfig.formControl.submit = () => {
    self.fieldConfig.formControl.touched = true;
    self.checkValidation();
    self.setClassName();
  };

  self.fieldConfig.formControl.reset = () => {
    self.fieldConfig.formControl.error = null;
    self.fieldConfig.formControl.touched = false;
    self.fieldConfig.formControl.valid = false;
    self.fieldConfig.value = undefined;
    self.errorMessage = null;
    self.setClassName();
  };
}
