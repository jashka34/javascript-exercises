import { expect, test, vi } from "vitest";

test("hello world", async () => {
  const consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  await import("./solution15.js");

  const firstArg = consoleLogSpy.mock.calls.join("\n");

  expect(firstArg).toBe('"Khal Drogo\'s favorite word is "athjahakar""');
});
