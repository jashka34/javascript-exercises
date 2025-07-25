import { expect, test, vi } from "vitest";

test("hello world", async () => {
  const consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  await import("./solution26.js");

  const firstArg = consoleLogSpy.mock.calls.join("\n");

  expect(firstArg).toBe("King Balon the 6th has 102 rooms.");
});
