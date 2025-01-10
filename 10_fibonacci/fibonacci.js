const fibonacci = function(num) {
    input = Number(num)
    if (input <0) {
        return "OOPS";
    }
    let sequence;
    let previous = 0;
    let current = 1;
    for (let i = 0; i < (input); i++) {
        sequence = previous + current;
        previous = current;
        current = sequence;
                
    }
    return previous
    
};


// Do not edit below this line
module.exports = fibonacci;
