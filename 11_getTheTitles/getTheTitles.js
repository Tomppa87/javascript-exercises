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
    let titles = [];
    console.log(array)
    for (items in array) {
        for (key in items) {
            console.log(key)
        }
        
    }
    return titles
};

getTheTitles(books)

// Do not edit below this line
module.exports = getTheTitles;
