/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { FormFieldConfigType, } from "./types";
export namespace Components {
    interface FormableInput {
        "fieldConfig": FormFieldConfigType;
    }
    interface FormableTextarea {
        "fieldConfig": FormFieldConfigType;
    }
}
declare global {
    interface HTMLFormableInputElement extends Components.FormableInput, HTMLStencilElement {
    }
    var HTMLFormableInputElement: {
        prototype: HTMLFormableInputElement;
        new (): HTMLFormableInputElement;
    };
    interface HTMLFormableTextareaElement extends Components.FormableTextarea, HTMLStencilElement {
    }
    var HTMLFormableTextareaElement: {
        prototype: HTMLFormableTextareaElement;
        new (): HTMLFormableTextareaElement;
    };
    interface HTMLElementTagNameMap {
        "formable-input": HTMLFormableInputElement;
        "formable-textarea": HTMLFormableTextareaElement;
    }
}
declare namespace LocalJSX {
    interface FormableInput {
        "fieldConfig"?: FormFieldConfigType;
    }
    interface FormableTextarea {
        "fieldConfig"?: FormFieldConfigType;
    }
    interface IntrinsicElements {
        "formable-input": FormableInput;
        "formable-textarea": FormableTextarea;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "formable-input": LocalJSX.FormableInput & JSXBase.HTMLAttributes<HTMLFormableInputElement>;
            "formable-textarea": LocalJSX.FormableTextarea & JSXBase.HTMLAttributes<HTMLFormableTextareaElement>;
        }
    }
}
