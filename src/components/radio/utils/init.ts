import * as parent from "../../../utils/field/init";
import { ComponentRadioInterface } from "../types";

function componentWillLoad(self: ComponentRadioInterface) {
  parent.componentWillLoad(self);
  self.setClassName();
}

export { componentWillLoad };
