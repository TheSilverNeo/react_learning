export type ScalarOperationType = (first: number, second: number) => number;

export type LinearOperationType = (first: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const pow: ScalarOperationType = (
    first: number,
    second: number
): number => Math.pow(first, second);

export const factorial: LinearOperationType = (first: number) => {
  if (first === 0) {
    return 1;
  }
  let f = 1;
  for (let i = 1; i < first; i++) {
    f = f * (i + 1);
  }
  return f;
}

export const square: LinearOperationType = (
    first: number
) => pow(first, 2);


export const mathOperators: { [key: string]: ScalarOperationType | LinearOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": pow,
  "!": factorial,
  '**': square,
};

export const mathPriorities: number[] = [1, 2];

const [FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": FIRST,
  "/": FIRST,
  "(": FIRST,
  "^": FIRST,
  "!": FIRST,
  "+": SECOND,
  "-": SECOND,
};
