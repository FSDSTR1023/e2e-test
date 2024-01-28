export const sum = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => {
  if (b === 0) throw new Error("Cannot divide by 0");
  return a / b;
};
export const power = (a, b) => a ** b;
