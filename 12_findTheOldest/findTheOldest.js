const { unwatchFile } = require("fs");

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      //removed for testing
      //yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
//create variable for today's date
let todayDate = new Date();


const findTheOldest = function(inputArray) {
    // variable object to store oldest person data
    let oldest = {
        name: "Jimmy",
        yearOfBirth: 1988,
        yearOfDeath: 1989,
        age: 1
      }
      // for loop through array of objects
    for (i = 0; i<inputArray.length; i++) {
        
        let calcAge
        // check if still alive and use this year to determine age
        if (inputArray[i].yearOfDeath === undefined) {
            
            calcAge = todayDate.getFullYear()-inputArray[i].yearOfBirth
            inputArray[i].age  = calcAge
        
        } else {
            calcAge = inputArray[i].yearOfDeath-inputArray[i].yearOfBirth
            inputArray[i].age  = calcAge            
        }
        // replace oldest person values in previously created object                     
        if (inputArray[i].age > oldest.age) {
            oldest.name =inputArray[i].name
            oldest.age = inputArray[i].age
        }
        
    }
    
    return oldest

    /*inputArray.map(people => ({...people, age: people.yearOfDeath-people.yearOfBirth}))
    console.log(people.age)
    return people*/

};

console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;
