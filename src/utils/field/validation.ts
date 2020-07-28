import { ValidatorType } from "@utils/validation/types";
import { FormFieldConfigType, ComponentFieldInterface } from "../../types";

export function checkValidation(
  self: ComponentFieldInterface,
  requiredMessage?: string
) {
  if (!self.fieldConfig.formControl?.touched) {
    return;
  }

  if (self.fieldConfig.options.required) {
    if (self.checkRequired) {
      self.checkRequired(requiredMessage);
    } else {
      checkRequired(self, requiredMessage);
    }

    if (!self.fieldConfig.formControl.valid) {
      return;
    }
  }

  if (self.checkValidators) {
    self.checkValidators();
    return;
  }

  checkValidators(self);
}

export function checkRequired(
  self: ComponentFieldInterface,
  requiredMessage?: string
) {
  self.fieldConfig.formControl.error = {
    ...self.fieldConfig.formControl.error,
    required: !self.fieldConfig.value,
  };

  if (!self.fieldConfig.value) {
    self.errorMessage = requiredMessage || "This field is required";
    self.fieldConfig.formControl.valid = false;
    return;
  }

  self.errorMessage = undefined;
  self.fieldConfig.formControl.valid = true;
  delete self.fieldConfig.formControl.error.required;
}

export function checkValidators(self: ComponentFieldInterface) {
  for (const key in self.fieldConfig.validators) {
    if (self.fieldConfig.validators.hasOwnProperty(key)) {
      const validator = self.fieldConfig.validators[key];

      self.fieldConfig.formControl.error = {
        ...self.fieldConfig.formControl.error,
        [key]: !checkValidateExpression(validator, self.fieldConfig),
      };

      if (self.fieldConfig.formControl.error[key]) {
        self.fieldConfig.formControl.valid = false;
        self.errorMessage = getValidateMessage(validator, self.fieldConfig);
        return;
      }

      self.fieldConfig.formControl.valid = true;
      delete self.fieldConfig.formControl.error[key];
    }
  }
}

export function checkValidateExpression(
  validator: ValidatorType,
  fieldConfig: FormFieldConfigType
) {
  return validator.expression(fieldConfig.value, fieldConfig.formControl);
}

export function getValidateMessage(
  validator: ValidatorType,
  fieldConfig: FormFieldConfigType
) {
  if (typeof validator.message === "string") {
    return validator.message;
  }

  return validator.message(fieldConfig.value, fieldConfig.formControl);
}
