import * as parent from "../../../utils/field/init";
import { ComponentToggleInterface } from "../types";

function componentWillLoad(self: ComponentToggleInterface) {
  parent.componentWillLoad(self);

  self.fieldConfig.formControl.reset = () => {
    self.fieldConfig.formControl.error = null;
    self.fieldConfig.formControl.touched = false;
    self.fieldConfig.formControl.valid = self.fieldConfig.options?.required ? false : true;
    self.fieldConfig.value = undefined;
    self.errorMessage = null;
    self.checked = false;
    self.setClassName();
  };

  self.setClassName();
}

export { componentWillLoad };
