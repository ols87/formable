import { newE2EPage } from '@stencil/core/testing';

describe('formable-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<formable-radio></formable-radio>');

    const element = await page.find('formable-radio');
    expect(element).toHaveClass('hydrated');
  });
});
