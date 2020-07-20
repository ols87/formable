import { newE2EPage } from '@stencil/core/testing';

describe('formable-textarea', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<formable-textarea></formable-textarea>');

    const element = await page.find('formable-textarea');
    expect(element).toHaveClass('hydrated');
  });
});
