import * as parent from "../../../utils/field/init";
import { ComponentSelectInterface } from "../types";

function componentWillLoad(self: ComponentSelectInterface) {
  // parent.componentWillLoad(self);
  self.setClassName();
}

export { componentWillLoad };
