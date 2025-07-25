import { expect, test, vi } from "vitest";

test("hello world", async () => {
  const consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  await import("./solution31.js");

  const firstArg = consoleLogSpy.mock.calls[0]?.[0];

  expect(firstArg).toBe(undefined);
});
