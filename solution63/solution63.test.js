import { expect, test } from "vitest";
import f from "./solution63.js";

test("test", () => {
  expect(f(0)).toBe("just a number");
  expect(f(666)).toBe("devil number");
  expect(f(42)).toBe("answer for everything");
  expect(f(7)).toBe("prime number");
});
