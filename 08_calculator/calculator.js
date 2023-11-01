const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  let sum = 0;
	a.forEach((value) => {
    sum += value;
  })
  return sum;
};

const multiply = function(a) {
  let total=1;
  a.forEach(value => {
    total = total * value;
  })
  return total;
};

const power = function(a, b) {
	let total = 1;
  for (let i = 0; i < b; i++) {
    total = a * total;
  };
  return total;
};

const factorial = function(a) {
	let total = 1;
  for (let i=a-1; i>=0; i--) {
    total = total * (a-i)
  }
  return total;
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
