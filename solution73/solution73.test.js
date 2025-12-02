import { expect, test } from "vitest";
import f from "./solution73.js";

test("test", () => {
  expect(f("attack")).toEqual("taatkc");
  expect(f("go!")).toEqual("og!");
  expect(f("back!")).toEqual("abkc!");
});
