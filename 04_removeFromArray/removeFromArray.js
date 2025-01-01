const removeFromArray = function(array,...args) {
    let funcArray = array;
    console.log(funcArray)
    console.log(args)
    let result = array.filter(item => !args.includes(item));
    console.log(result)        
    return result;

};

removeFromArray([1,2,3,4],3,2)
// Do not edit below this line
module.exports = removeFromArray;
