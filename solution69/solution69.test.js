import { expect, test } from "vitest";
import f from "./solution69.js";

test("test", () => {
  expect(f("Bran")).toEqual("rn");
  expect(f("")).toEqual("");
  expect(f("Hexlet")).toEqual("elt");
});
