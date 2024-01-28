import { describe, expect, test } from "vitest";
import { divide, multiply, power, subtract, sum } from "./mathHelper";

describe("Math tests", () => {
  test("sum should sum", () => {
    expect(sum(2, 3)).toBe(5);
  });
  test("subtract sould substract", () => {
    expect(subtract(2, 3)).toBe(-1);
  });
  test("multiply should multiply", () => {
    expect(multiply(2, 3)).toBe(6);
  });
  test("divide should divide", () => {
    expect(divide(6, 3)).toBe(2);
  });
  test("divide should throw error when dividing by 0", () => {
    expect(() => divide(6, 0)).toThrow();
  });
  test("power should power", () => {
    expect(power(2, 3)).toBe(8);
  });
});
