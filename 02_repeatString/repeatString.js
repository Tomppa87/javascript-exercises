const repeatString = function(string, num) {
    result = "";
    if (num >=0) {
        for (i = 0; i<num; i++) {
            result = result.concat(string)
        }  
    } 
    else if (num <0) {
        return "ERROR";
    
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
