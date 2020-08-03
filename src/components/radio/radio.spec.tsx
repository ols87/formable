import { newSpecPage } from '@stencil/core/testing';
import { FormableRadio } from './radio';

describe('formable-radio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FormableRadio],
      html: `<formable-radio></formable-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <formable-radio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </formable-radio>
    `);
  });
});
