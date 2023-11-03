const getTheTitles = function(books) {
    let bookTitleArr = []
    books.forEach(value => {
        bookTitleArr.push(value.title);
    })
    return bookTitleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
