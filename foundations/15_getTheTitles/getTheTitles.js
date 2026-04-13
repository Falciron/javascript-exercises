const getTheTitles = function(bookArray) {
    return bookArray.reduce((currArray,newBook) => {
        currArray.push(newBook.title);
        return currArray;},
    []);
};

// Do not edit below this line
module.exports = getTheTitles;
