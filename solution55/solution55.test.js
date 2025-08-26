import { expect, test } from "vitest";
import f from "./solution55.js";

test("test", () => {
  expect(f("89602223423")).toBe(false);
  expect(f("+79602223423")).toBe(true);
});
