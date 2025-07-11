import { expect, test, vi } from "vitest";

test("hello world", async () => {
  const consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  await import("./solution24.js");

  const firstArg = consoleLogSpy.mock.calls.join("\n");

  expect(firstArg).toBe(
    "Hello, Joffrey!\nHere is important information about your account security.\nWe couldn't verify your mother's maiden name.",
  );
});
