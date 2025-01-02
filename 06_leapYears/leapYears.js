const leapYears = function(year) {
    if (Number.isInteger(year/4) === true) {
        if (Number.isInteger(year/400)===true) {
            return true
        } else if (Number.isInteger(year/100)===true) {
        return false
        }
        else return true
    }
     else {
        return false
    }


};

console.log(leapYears(1600))

// Do not edit below this line
module.exports = leapYears;
