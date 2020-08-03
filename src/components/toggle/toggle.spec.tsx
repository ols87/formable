import { newSpecPage } from '@stencil/core/testing';
import { FormableToggle } from './toggle';

describe('formable-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FormableToggle],
      html: `<formable-toggle></formable-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <formable-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </formable-toggle>
    `);
  });
});
