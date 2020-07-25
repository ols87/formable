import { E2EElement, E2EPage, newE2EPage } from "@stencil/core/testing";

describe("component-input", () => {
  let page: E2EPage;
  let element: E2EElement;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <formable-input></formable-input>
      `,
    });

    element = await page.find("formable-input");
  });

  it("renders view", async () => {
    expect(element).toHaveClass("hydrated");
  });

  it("has label", async () => {
    element.setProperty("fieldConfig", {
      options: {
        id: "",
        type: "text",
        required: false,
        label: "foo",
      },
    });

    await page.waitForChanges();

    const label = await page.find(".input-label");

    expect(label).toBeTruthy();

    expect(await label.innerHTML).toEqual("foo");
  });

  it("has id", async () => {
    element.setProperty("fieldConfig", {
      options: {
        id: "foo",
        type: "text",
        required: false,
      },
    });

    await page.waitForChanges();

    const input = await page.find("input");

    expect(await input.id).toEqual("foo");
  });
});
