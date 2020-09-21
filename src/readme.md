# vf-test



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                          | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------- | --------- | ----------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `form`   | --        |             | `FormFields & FormController` | `Formable.form({     textarea: {       type: "textarea",       view: {         id: "textarea",         required: true,         rows: 3,       },     },     select: {       type: "select",       view: {         id: "select",         required: true,         options: [           {             label: 1,             value: 1,           },           {             label: 2,             value: 2,           },         ],       },     },     editor: {       type: "editor",       view: {         id: "editor",         label: "editor",         required: true,       },       value: "abc",     },   })` |


## Dependencies

### Depends on

- [vf-form](./components/form)

### Graph
```mermaid
graph TD;
  form-test --> vf-form
  vf-form --> vf-checkbox
  vf-form --> vf-datepicker
  vf-form --> vf-editor
  vf-form --> vf-input
  vf-form --> vf-radio
  vf-form --> vf-select
  vf-form --> vf-textarea
  vf-form --> vf-toggle
  style form-test fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
