import * as parent from "../../../utils/field/init";
import { ComponentToggleInterface } from "../types";

function componentWillLoad(self: ComponentToggleInterface) {
  parent.componentWillLoad(self);
  self.setClassName();
}

export { componentWillLoad };
