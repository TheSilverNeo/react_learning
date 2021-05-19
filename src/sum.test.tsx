import { sum, subtraction, multiplication, division, exponentiation, squaring , factorial } from "./sum";

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

test("adds 1 - 2 to equal -1", () => {
    expect(subtraction(1, 2)).toBe(-1);
});

test("adds 1 * 2 to equal 2", () => {
    expect(multiplication(1, 2)).toBe(2);
});

test("adds 1 / 2 to equal 0.5", () => {
    expect(division(1, 2)).toBe(0.5)
});

test("adds 2^3 to equal 8", () => {
    expect(exponentiation(2, 3)).toBe(8)
});

test("adds 8.4** equal 70,56", () => {
    expect(squaring(8.4)).toBe(70.56);
});

test("adds 8! equal 40320", () => {
    expect(factorial(8)).toBe(40320);
});