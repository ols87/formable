# vf-form



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type           | Default    |
| ------------ | ------------- | ----------- | -------------- | ---------- |
| `autoRender` | `auto-render` |             | `boolean`      | `false`    |
| `fields`     | --            |             | `FormProperty` | `{}`       |
| `reset`      | `reset`       |             | `any`          | `() => {}` |
| `submit`     | `submit`      |             | `any`          | `() => {}` |


## Dependencies

### Used by

 - [vf-test](../..)

### Depends on

- [vf-input](../input)
- [vf-textarea](../textarea)
- [vf-select](../select)
- [vf-checkbox](../checkbox)
- [vf-radio](../radio)
- [vf-toggle](../toggle)
- [vf-editor](../editor)
- [vf-datepicker](../datepicker)

### Graph
```mermaid
graph TD;
  vf-form --> vf-input
  vf-form --> vf-textarea
  vf-form --> vf-select
  vf-form --> vf-checkbox
  vf-form --> vf-radio
  vf-form --> vf-toggle
  vf-form --> vf-editor
  vf-form --> vf-datepicker
  vf-test --> vf-form
  style vf-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
