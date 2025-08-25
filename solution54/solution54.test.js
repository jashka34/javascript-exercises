import { expect, test } from "vitest";
import f from "./solution54.js";

test("test", () => {
  expect(f("8234782")).toBe(false);
  expect(f("Joker")).toBe(false);
  expect(f("Mister")).toBe(true);
});
