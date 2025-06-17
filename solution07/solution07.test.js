import { expect, test, vi } from "vitest";

test("hello world", async () => {
  const consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  await import("./solution07.js");

  const firstArg = consoleLogSpy.mock.calls.join("\n");

  expect(firstArg).toBe("87");
});
