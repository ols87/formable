// import { ValidatorType } from "@utils/validation/types";
// import { FormFieldConfigType } from "@type/.";

// import { FieldProperty } from "field/types";

// export class Validation {
//   public field: FieldProperty;

//   constructor() {}

//   public async check(): Promise<boolean> {
//     if (!this.field.meta.touched) return false;

//     if (this.field.view.required) return this.required();
//   }

//   public async required(): Promise<boolean> {
//     return true;
//   }
// }

// export function checkValidation(requiredMessage?: string) {
//   if (!this.meta.touched) {
//     return;
//   }

//   if (this.view.required) {
//     if (this.checkRequired) {
//       this.checkRequired(requiredMessage);
//     } else {
//       checkRequired(requiredMessage);
//     }

//     if (!this.meta.valid) {
//       return;
//     }
//   }

//   if (this.checkValidators) {
//     this.checkValidators();
//     return;
//   }

//   checkValidators();
// }

// export function checkRequired(requiredMessage?: string) {
//   this.meta.error = {
//     ...this.meta.error,
//     required: !this.fieldConfig.value,
//   };

//   if (!this.fieldConfig.value) {
//     this.errorMessage = requiredMessage || "This field is required";
//     this.meta.valid = false;
//     return;
//   }

//   this.errorMessage = undefined;
//   this.meta.valid = true;
//   delete this.meta.error.required;
// }

// export function checkValidators() {
//   for (const key in this.fieldConfig.validators) {
//     if (this.fieldConfig.validators.hasOwnProperty(key)) {
//       const validator = this.fieldConfig.validators[key];

//       this.meta.error = {
//         ...this.meta.error,
//         [key]: !checkValidateExpression(validator, this.fieldConfig),
//       };

//       if (this.meta.error[key]) {
//         this.meta.valid = false;
//         this.errorMessage = getValidateMessage(validator, this.fieldConfig);
//         return;
//       }

//       this.meta.valid = true;
//       delete this.meta.error[key];
//     }
//   }
// }

// export function checkValidateExpression(
//   validator: ValidatorType,
//   fieldConfig: FormFieldConfigType
// ) {
//   return validator.expression(fieldConfig.value, fieldConfig.formControl);
// }

// export function getValidateMessage(
//   validator: ValidatorType,
//   fieldConfig: FormFieldConfigType
// ) {
//   if (typeof validator.message === "string") {
//     return validator.message;
//   }

//   return validator.message(fieldConfig.value, fieldConfig.formControl);
// }
