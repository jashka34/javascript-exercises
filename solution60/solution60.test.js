import { expect, test } from "vitest";
import f from "./solution60.js";

test("test", () => {
  expect(f("yandex.ru")).toBe("https://yandex.ru");
  expect(f("https://yandex.ru")).toBe("https://yandex.ru");
});
