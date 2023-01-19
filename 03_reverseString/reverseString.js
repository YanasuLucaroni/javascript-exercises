const reverseString = function (string) {
  let invertedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    invertedString += string[i];
  }
  return invertedString;
};

// Do not edit below this line
module.exports = reverseString;
