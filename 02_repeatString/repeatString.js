const repeatString = function (string, n) {
  let stringRepeated = "";
  for (let i = 0; i < n; i++) {
    stringRepeated += string;
  }

  if (n < 0) {
    return "ERROR";
  } else {
    return stringRepeated;
  }
};

// Do not edit below this line
module.exports = repeatString;
