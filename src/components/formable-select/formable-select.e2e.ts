import { newE2EPage } from '@stencil/core/testing';

describe('formable-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<formable-select></formable-select>');

    const element = await page.find('formable-select');
    expect(element).toHaveClass('hydrated');
  });
});
