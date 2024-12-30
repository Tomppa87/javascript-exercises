const { reverse } = require("node:dns/promises");

const reverseString = function(string) {
    toArray = string.split("");
    console.log(toArray);
    toArray.reverse();
    toArray = toArray.join("")
    console.log(toArray);
    return toArray
    
};
reverseString("Hello")
// Do not edit below this line
module.exports = reverseString;
