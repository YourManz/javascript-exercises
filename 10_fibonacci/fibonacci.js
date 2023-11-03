const fibonacci = function(nthDigit) {
    if (nthDigit <= 0) {
        return 'OOPS';
    }
    let fibNumber = 1;
    let fibArray = [1, 1, 2, 3];
    for (let i = 0; i <= Number(nthDigit); i++) {
        let newFib = fibArray[3+i] + fibArray[2+i]
        fibArray.push(newFib);
    };  
    return fibArray[nthDigit-1];
};

// Do not edit below this line
module.exports = fibonacci;
