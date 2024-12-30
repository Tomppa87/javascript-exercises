const removeFromArray = function(array, num1,) {
    
    let newArray = [];
    
    for (item in array) {
        //console.log(array[item])
        if (array[item] != num1){
            //console.log("not the same" +item)
            newArray.push(array[item])
            
        } 
        else continue
        
    }
    console.log(newArray)
    //console.log(array)
    return newArray

};
removeFromArray([1,2,3,4],3)
// Do not edit below this line
module.exports = removeFromArray;
