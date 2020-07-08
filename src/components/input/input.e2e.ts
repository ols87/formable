import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('component-input', () => {
  let page: E2EPage;
  let element: E2EElement;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <component-input></component-input>
      `,
    });

    element = await page.find('component-input');
  });

  it('renders view', async () => {
    expect(element).toHaveClass('hydrated');
  });
});
