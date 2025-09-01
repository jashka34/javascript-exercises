// @ts-check

import { expect, test } from "vitest";
import f from "./solution57.js";

test("test", () => {
  expect(f("wow")).toBe(false);
  expect(f("hexlet")).toBe(true);
  expect(f("asdffdsa")).toBe(false);
  expect(f("Wow")).toBe(false);
});
