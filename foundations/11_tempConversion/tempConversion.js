const convertToCelsius = function(fahrenheitTemp) {
  const celsiusTemp = (fahrenheitTemp - 32) / (9/5);
  return Number.isInteger(celsiusTemp) ? celsiusTemp : +celsiusTemp.toFixed(1);
};

const convertToFahrenheit = function(celsiusTemp) {
  const fahrenheitTemp = celsiusTemp * (9/5) + 32;
  return Number.isInteger(fahrenheitTemp) ? fahrenheitTemp : +fahrenheitTemp.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
