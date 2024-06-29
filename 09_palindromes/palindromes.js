const palindromes = function (text) {
  text = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g, "");
  copyText = text.split("").reverse().join("");

  return text === copyText;
};

// Do not edit below this line
module.exports = palindromes;
