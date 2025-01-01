const sumAll = function(num1,num2) {
    let result = 0;
    console.log(typeof num1)
    if ((num1 < 0) || (num2 <0 ) || (Number.isInteger(num1)===false) || (Number.isInteger(num2)===false)) {
        console.log("Error")
        return "ERROR"
    }

    else if ((typeof num1 != "number") || (typeof num2 != "number")) {
        console.log("Not a Number")
        return "ERROR"
    }

    else if (num1 <= num2) {
        for (let index = num1; index <= num2; index++) {
            result += index;
            console.log(result)
        }    
    }   else if (num2 < num1) {
            for (let index = num2; index <= num1; index++) {
                result += index;
                console.log(result)
        }
    }
            
 
console.log(result)
return result
}
sumAll(2.5,1)

// Do not edit below this line
module.exports = sumAll;
