const palindromes = function (input) {
    const cleanedString = input.replace(/[^a-zA-Z0-9]/g, '')    
    var lowercase = cleanedString.toLowerCase()
    //console.log(lowercase)
    var toArray = lowercase.split("");
    
    //console.log(toArray)
    var toReverse = toArray.reverse()
    //console.log(toReverse)
    var joined = toReverse.join("")
    console.log(joined);
    
    return joined === lowercase;
};

console.log(palindromes("Rac3e3car!!"))

// Do not edit below this line
module.exports = palindromes;
