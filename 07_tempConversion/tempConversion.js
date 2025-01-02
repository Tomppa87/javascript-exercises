//farenheit to celcius
const convertToCelsius = function(inputFahrenheit) {
  let resultC = 0
  resultC =((inputFahrenheit-32)*5/9)
  return parseFloat(resultC.toFixed(1))
};

//celsius to farenheit
const convertToFahrenheit = function(inputCelsius) {
  let resultF = 0;
  resultF = ((inputCelsius*9/5+32))
  return parseFloat(resultF.toFixed(1))
};

console.log(convertToCelsius(100))
console.log(convertToFahrenheit(73.2))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
