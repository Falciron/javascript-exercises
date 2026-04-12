const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	return numArray.reduce((sum,current) => sum += current,0);
};

const multiply = function(numArray) {
  return numArray.reduce((sum,current) => sum *= current);
};

const power = function(base,exponent) {
	return base ** exponent;
};

const factorial = function(number) {
  let factorialSum = 1;
	for (let i = 1; i <= number; i++){
    factorialSum *= i;
  }
  return factorialSum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
