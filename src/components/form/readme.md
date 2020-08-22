# vf-form



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type           | Default |
| -------- | --------- | ----------- | -------------- | ------- |
| `fields` | --        |             | `FormProperty` | `{}`    |


## Events

| Event         | Description | Type                                                                 |
| ------------- | ----------- | -------------------------------------------------------------------- |
| `eventChange` |             | `CustomEvent<{ [x: string]: FieldProperty & DynamicFormProperty; }>` |
| `eventReset`  |             | `CustomEvent<any>`                                                   |
| `eventSubmit` |             | `CustomEvent<boolean>`                                               |


## Dependencies

### Used by

 - [vf-test](../..)

### Depends on

- [vf-checkbox](../checkbox)
- [vf-datepicker](../datepicker)
- [vf-editor](../editor)
- [vf-input](../input)
- [vf-radio](../radio)
- [vf-select](../select)
- [vf-textarea](../textarea)
- [vf-toggle](../toggle)

### Graph
```mermaid
graph TD;
  vf-form --> vf-checkbox
  vf-form --> vf-datepicker
  vf-form --> vf-editor
  vf-form --> vf-input
  vf-form --> vf-radio
  vf-form --> vf-select
  vf-form --> vf-textarea
  vf-form --> vf-toggle
  vf-test --> vf-form
  style vf-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
