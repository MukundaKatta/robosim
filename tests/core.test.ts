import { describe, it, expect } from "vitest";
import { Robosim } from "../src/core.js";
describe("Robosim", () => {
  it("init", () => { expect(new Robosim().getStats().ops).toBe(0); });
  it("op", async () => { const c = new Robosim(); await c.learn(); expect(c.getStats().ops).toBe(1); });
  it("reset", async () => { const c = new Robosim(); await c.learn(); c.reset(); expect(c.getStats().ops).toBe(0); });
});
