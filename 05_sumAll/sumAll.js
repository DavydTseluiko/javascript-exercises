const sumAll = function (x, y) {
  if (typeof x !== "number" || typeof y !== "number" || x < 0 || y < 0) {
    return "ERROR";
  }

  let sum = 0;
  if (x < y) {
    while (x <= y) sum += x++;
  } else {
    while (x >= y) sum += y++;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
