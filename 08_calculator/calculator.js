const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((total, number) => total + number);
};

const multiply = function (array) {
  return array.reduce((total, number) => total * number, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let countFactorial = 1;
  for (let i = a; i > 0; i--) {
    countFactorial *= i;
  }

  return countFactorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
