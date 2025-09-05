import { expect, test } from "vitest";
import f from "./solution59.js";

test("test", () => {
  expect(f(100500)).toBe("Try again!");
  expect(f(42)).toBe("You win!");
});
