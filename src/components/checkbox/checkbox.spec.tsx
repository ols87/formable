import { newSpecPage } from '@stencil/core/testing';
import { FormableCheckbox } from './checkbox';

describe('formable-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FormableCheckbox],
      html: `<formable-checkbox></formable-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <formable-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </formable-checkbox>
    `);
  });
});
