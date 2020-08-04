import { ValidatorType } from "@utils/validation/types";
import { FormFieldConfigType } from "@type/.";

export function checkValidation(requiredMessage?: string) {
  if (!this.fieldConfig.formControl?.touched) {
    return;
  }

  if (this.fieldConfig.options.required) {
    if (this.checkRequired) {
      this.checkRequired(requiredMessage);
    } else {
      checkRequired(requiredMessage);
    }

    if (!this.fieldConfig.formControl.valid) {
      return;
    }
  }

  if (this.checkValidators) {
    this.checkValidators();
    return;
  }

  checkValidators();
}

export function checkRequired(requiredMessage?: string) {
  this.fieldConfig.formControl.error = {
    ...this.fieldConfig.formControl.error,
    required: !this.fieldConfig.value,
  };

  if (!this.fieldConfig.value) {
    this.errorMessage = requiredMessage || "This field is required";
    this.fieldConfig.formControl.valid = false;
    return;
  }

  this.errorMessage = undefined;
  this.fieldConfig.formControl.valid = true;
  delete this.fieldConfig.formControl.error.required;
}

export function checkValidators() {
  for (const key in this.fieldConfig.validators) {
    if (this.fieldConfig.validators.hasOwnProperty(key)) {
      const validator = this.fieldConfig.validators[key];

      this.fieldConfig.formControl.error = {
        ...this.fieldConfig.formControl.error,
        [key]: !checkValidateExpression(validator, this.fieldConfig),
      };

      if (this.fieldConfig.formControl.error[key]) {
        this.fieldConfig.formControl.valid = false;
        this.errorMessage = getValidateMessage(validator, this.fieldConfig);
        return;
      }

      this.fieldConfig.formControl.valid = true;
      delete this.fieldConfig.formControl.error[key];
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
