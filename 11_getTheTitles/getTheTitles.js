const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

const getTheTitles = function(array) {
  // create new array to store titles  
    let titles = [];
    
    // loop through function input array and push object titles to created titles array
    for (items in array) {      
      titles.push(array[items].title)        
      }
    return titles    
    }

getTheTitles(books)

// Do not edit below this line
module.exports = getTheTitles;
