const sum = (num1, num2) => num1 + num2;

const sub = (num1, num2) => num1 - num2;

const div = (num1, num2) => {
  const result = (num2 === 0) ? 'Cannot divide by zero' : num1 / num2;
  return result;
};

const mul = (num1, num2) => num1 * num2;

export default {
  sum, sub, div, mul,
};
