import { checkEquals } from "utils/filterclasses";

describe("Тестирование функции сравнивания строк в аругментах", () => {
  it("Ожидаем true", () => {
    const expectFn = checkEquals("All", "All");
    expect(expectFn).toEqual(true);
  });
  it("Ожидаем true", () => {
    const expectFn = checkEquals("Completed", "Completed");
    expect(expectFn).toEqual(true);
  });
  it("Ожидаем true", () => {
    const expectFn = checkEquals("Active", "Active");
    expect(expectFn).toEqual(true);
  });
  it("Ожидаем false", () => {
    const expectFn = checkEquals("Active", "Completed");
    expect(expectFn).toEqual(false);
  });
  it("Ожидаем false", () => {
    const expectFn = checkEquals("Active", "All");
    expect(expectFn).toEqual(false);
  });
  it("Ожидаем false", () => {
    const expectFn = checkEquals("Active", "active");
    expect(expectFn).toEqual(false);
  });
});
