import { expect, test } from "vitest";
import f from "./solution50.js";

test("test", () => {
  expect(f("текст", 3)).toBe("тек...");
  expect(f("и пошла вода", 5)).toBe("и пош...");
});
