import * as parent from "../../../utils/field/init";
import { ComponentCheckboxInterface } from "../types";

function componentWillLoad(self: ComponentCheckboxInterface) {
  parent.componentWillLoad(self);
  self.setClassName();
}

export { componentWillLoad };
