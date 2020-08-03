import { newE2EPage } from '@stencil/core/testing';

describe('formable-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<formable-toggle></formable-toggle>');

    const element = await page.find('formable-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
