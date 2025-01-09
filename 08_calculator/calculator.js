const add = function(num1, num2) {
  return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(arr) {
	let sumFunc = arr.reduce((total,currentValue) => {
    return total+currentValue;
  },0)
  return sumFunc
};

const multiply = function(arr) {
  let multipyFunction = arr.reduce((total,currentValue) => {
    return total*currentValue;
  },1);
  return multipyFunction;
};
//console.log(multiply([1,5,6]))

const power = function(num1, power) {
  var result = 1
	for (i = 0; i < power; i++) {
    result *= num1;
    console.log(result)      
    
  }
  return result
};
//console.log(power(4,3))

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
  else {
  var result = num
  console.log(num)
  for (let i = 1; i < num; i++) {
    result *= (num-i);
    console.log(result)
    
  }
  return result;
  }
  
};

console.log(factorial(5))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
