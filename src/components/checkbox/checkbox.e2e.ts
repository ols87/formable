import { newE2EPage } from '@stencil/core/testing';

describe('formable-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<formable-checkbox></formable-checkbox>');

    const element = await page.find('formable-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
