export interface FieldLifecycle {
  connectedCallback?: () => Promise<any> | any;
  disconnectedCallback?: () => Promise<any> | any;
  componentWillLoad?: () => Promise<any> | any;
  componentDidLoad?: () => Promise<any> | any;
  componentShouldUpdate?: (
    newVal: any,
    oldVal: any,
    propName: string
  ) => boolean | void;
  componentWillRender?: () => Promise<any> | any;
  componentDidRender?: () => Promise<any> | any;
  componentWillUpdate?: () => Promise<any> | any;
  componentDidUpdate?: () => Promise<any> | any;
}
