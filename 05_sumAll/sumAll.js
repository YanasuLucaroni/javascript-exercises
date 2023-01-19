const sumAll = function (num1, num2) {
  //   let sum = 0;

  //   for (let i = num1; i <= num2; i++) {
  //     sum += i;
  //   }
  //   return sum;
  if (
    typeof num1 != "number" ||
    typeof num2 != "number" ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }
  let terms;
  if (num2 < num1) {
    terms = num1 - num2 + 1;
  } else {
    terms = num2 - num1 + 1;
  }
  return (terms * (num1 + num2)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
