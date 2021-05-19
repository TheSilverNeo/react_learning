import { mul, div, add, minus, pow, factorial, square } from "./mathOperators";

describe("mathOperators test cases", () => {
  it("mul 1 * 2 to equal 2", () => {
    expect(mul(1, 2)).toBe(2);
  });

  it("mul 2 * 2 to equal 4", () => {
    expect(mul(2, 2)).toBe(4);
  });

  it("div 2 / 2 to equal 1", () => {
    expect(div(2, 2)).toBe(1);
  });

  it("div 4 / 2 to equal 2", () => {
    expect(div(4, 2)).toBe(2);
  });

  it("add 4 + 2 to equal 6", () => {
    expect(add(4, 2)).toBe(6);
  });

  it("minus 4 - 2 to equal 2", () => {
    expect(minus(4, 2)).toBe(2);
  });

  it("2 pow 3 to equal 8", function () {
    expect(pow(2, 3)).toBe(8);
  });

  it("factorial of 8 to equal 40320", function () {
    expect(factorial(8)).toBe(40320);
  });

  it("4 square to be 16", function () {
    expect(square(4)).toBe(16);
  });
});
