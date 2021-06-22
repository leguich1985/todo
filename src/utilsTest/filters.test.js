import { activeTask, completedTask } from "utils/filters";

describe("Тестирование функции completedTask по полю completed: true", () => {
  let mocks = {};

  beforeAll(() => {
    mocks = {
      id: 1,
      completed: true,
    };
  });

  it("Ожидаем true", () => {
    const expectFn = completedTask(mocks);
    expect(expectFn).toEqual(true);
  });
});

describe("Тестирование функции completedTask по полю completed: false", () => {
  let mocks = {};

  beforeAll(() => {
    mocks = {
      id: 1,
      completed: false,
    };
  });

  it("Ожидаем false", () => {
    const expectFn = completedTask(mocks);
    expect(expectFn).toEqual(false);
  });
});

describe("Тестирование функции activeTask по полю completed: false", () => {
  let mocks = {};

  beforeAll(() => {
    mocks = {
      id: 1,
      completed: false,
    };
  });

  it("Ожидаем true", () => {
    const expectFn = activeTask(mocks);
    expect(expectFn).toEqual(true);
  });
});

describe("Тестирование функции activeTask по полю completed: true", () => {
  let mocks = {};

  beforeAll(() => {
    mocks = {
      id: 1,
      completed: true,
    };
  });

  it("Ожидаем false", () => {
    const expectFn = activeTask(mocks);
    expect(expectFn).toEqual(false);
  });
});
