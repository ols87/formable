import * as parent from "../../../utils/field/init";
import { ComponentTextareaInterface } from "../types";

function componentWillLoad(self: ComponentTextareaInterface) {
  self.rows = self.fieldConfig.options.rows;

  if (!self.rows) {
    self.rows = 3;
    self.fieldConfig.options.rows = self.rows;
  }

  self.hiddenValue = self.fieldConfig.value;

  // parent.componentWillLoad(self);
  self.setClassName();
}

function componentDidLoad(self: ComponentTextareaInterface) {
  setTimeout(() => {
    const textareaHidden =
      self.el.shadowRoot.lastElementChild.firstElementChild;

    if (!textareaHidden) {
      return;
    }

    self.lineHeight = textareaHidden.clientHeight / self.rows;
    self.checkAutoExpand();
  }, 0);
}

function checkScrollHeightTextareaHidden(self: ComponentTextareaInterface) {
  setTimeout(() => {
    const textareaHidden =
      self.el.shadowRoot.lastElementChild.firstElementChild;

    if (!textareaHidden) {
      return;
    }

    if (textareaHidden.scrollHeight === textareaHidden.clientHeight) {
      self.rows = self.fieldConfig.options.rows;
      return;
    }

    self.rows = Math.floor(textareaHidden.scrollHeight / self.lineHeight);

    checkScrollHeightTextarea(self);
  }, 0);
}

function checkScrollHeightTextarea(self: ComponentTextareaInterface) {
  setTimeout(() => {
    const textarea = self.el.shadowRoot.lastElementChild.children[1];

    if (!textarea) {
      return;
    }

    if (textarea.scrollHeight === textarea.clientHeight) {
      return;
    }

    self.checkScrollHeightTextareaHidden();
  }, 10);
}

export { componentWillLoad, componentDidLoad, checkScrollHeightTextareaHidden };
