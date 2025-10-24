import { expect, test } from "vitest";
import f from "./solution62.js";

test("test", () => {
  expect(f("hey")).toBe("yeh");
  expect(f("Hey")).toBe("Hey");
  expect(f("")).toBe("");
});
