const convertToCelsius = function (farenheit) {
  // (farenheit - 32) * (5 / 9) Esta es la formula para cambiar
  // farenheit a celsius y después se redondea
  return Math.round((farenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  // celsius * (9 / 5) + 32) Esta es la formula para cambiar
  // de celsius a farenheit y después se redondea
  return Math.round((celsius * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
