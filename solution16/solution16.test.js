import { expect, test, vi } from "vitest";

test("hello world", async () => {
  const consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  await import("./solution16.js");

  const firstArg = consoleLogSpy.mock.calls.join("\n");
  expect(firstArg).toBe(
    '- Did Joffrey agree?\n- He did. He also said "I love using \\n".',
  );
});
