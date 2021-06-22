import { generateNewTask } from "utils/generateNewTask.js";

describe("Тестирование создания нового таска", () => {
  jest
    .spyOn(global, "Date")
    .mockImplementation(() => new Date("2020-11-26T00:00:00.000Z"));
  Date.now = () => 1606348800;
  it("Создаем новый таск", () => {
    const expectFn = generateNewTask("Hello", 10);
    expect(expectFn).toEqual({
      id: 10,
      text: "Hello",
      completed: false,
      isEditing: false,
      createdAt: new Date(Date.now()),
    });
  });
});
