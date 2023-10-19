const reverseString = function(string) {
    let regularArray = string.split("");
    let invertedArray = regularArray.reverse();
    let invertedString = invertedArray.join("");
    return invertedString;
};

// Do not edit below this line
module.exports = reverseString;
