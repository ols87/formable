import { newE2EPage } from '@stencil/core/testing';

describe('formable-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<formable-form></formable-form>');

    const element = await page.find('formable-form');
    expect(element).toHaveClass('hydrated');
  });
});
