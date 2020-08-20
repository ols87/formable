export interface FieldView {
  id: string;
  name?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  classes?: {
    wrapper?: string;
    label?: string;
    field?: string;
  };
  errors?: Array<string>;
}
