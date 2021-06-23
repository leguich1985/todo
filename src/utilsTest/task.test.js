import { completedTask, filterTasks, deleteTask } from "utils/task";

describe("Тестирование завершения работы над задачей", () => {
  let mocks = [];

  beforeAll(() => {
    mocks = [
      {
        id: 1,
        completed: true,
      },
      {
        id: 2,
        completed: false,
      },
      {
        id: 3,
        completed: false,
      },
    ];
  });

  it("Задача была завершена, теперь снова активна", () => {
    const expectFn = completedTask(1, mocks);
    expect(expectFn).toEqual([
      {
        id: 1,
        completed: false,
      },
      {
        id: 2,
        completed: false,
      },
      {
        id: 3,
        completed: false,
      },
    ]);
  });

  it("Задача была активна, теперь завершена", () => {
    const expectFn = completedTask(2, mocks);
    expect(expectFn).toEqual([
      {
        id: 1,
        completed: false,
      },
      {
        id: 2,
        completed: true,
      },
      {
        id: 3,
        completed: false,
      },
    ]);
  });
});

describe("Тестирование фильтрации", () => {
  let mocks = [];

  beforeAll(() => {
    mocks = [
      {
        id: 1,
        completed: true,
      },
      {
        id: 2,
        completed: false,
      },
      {
        id: 3,
        completed: false,
      },
    ];
  });

  it("Фильтруем по ключу All", () => {
    const expectFn = filterTasks(mocks, "All");
    expect(expectFn).toEqual([
      {
        id: 1,
        completed: true,
      },
      {
        id: 2,
        completed: false,
      },
      {
        id: 3,
        completed: false,
      },
    ]);
  });

  it("Фильтруем по ключу BlaBla", () => {
    const expectFn = filterTasks(mocks, "BlaBla");
    expect(expectFn).toEqual([
      {
        id: 1,
        completed: true,
      },
      {
        id: 2,
        completed: false,
      },
      {
        id: 3,
        completed: false,
      },
    ]);
  });

  it("Фильтруем по ключу Completed", () => {
    const expectFn = filterTasks(mocks, "Completed");
    expect(expectFn).toEqual([
      {
        id: 1,
        completed: true,
      },
    ]);
  });

  it("Фильтруем по ключу Active", () => {
    const expectFn = filterTasks(mocks, "Active");
    expect(expectFn).toEqual([
      {
        id: 2,
        completed: false,
      },
      {
        id: 3,
        completed: false,
      },
    ]);
  });
});

describe("Тестирование удаления Туду по айди", () => {
  let mocks = [];

  beforeAll(() => {
    mocks = [
      {
        id: 1,
        completed: true,
      },
      {
        id: 2,
        completed: false,
      },
      {
        id: 3,
        completed: false,
      },
    ];
  });

  it("Удаляем по айди 1", () => {
    const expectFn = deleteTask(mocks, 1);
    expect(expectFn).toEqual([
      {
        id: 2,
        completed: false,
      },
      {
        id: 3,
        completed: false,
      },
    ]);
  });

  it("Удаляем по айди 3", () => {
    const expectFn = deleteTask(mocks, 3);
    expect(expectFn).toEqual([
      {
        id: 1,
        completed: true,
      },
      {
        id: 2,
        completed: false,
      },
    ]);
  });

  it("Удаляем по айди 100500", () => {
    const expectFn = deleteTask(mocks, 100500);
    expect(expectFn).toEqual([
      {
        id: 1,
        completed: true,
      },
      {
        id: 2,
        completed: false,
      },
      {
        id: 3,
        completed: false,
      },
    ]);
  });
});
