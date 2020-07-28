import { ComponentInput } from "./input";

describe("input", () => {
  let component;

  beforeEach(async () => {
    component = new ComponentInput();
  });

  it("sets class", async () => {
    component.setClassName();

    expect(component.className).toContain("input");
  });
});
