const palindromes = function (a) {
    let input = a.toUpperCase();
    let array = input.split("");

    const letters = (() => {
        const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
        return caps.concat(caps.map(letter => letter.toLowerCase()));
      })();

    const numbers = (() => {
        const num = [...Array(10)].map((val, i) => String.fromCharCode(i + 48));
        return num;
    })();

    array.forEach((value, index) => {
        if (!letters.includes(value)) {
            if (!numbers.includes(value)) {
                array.splice(index, 1);
                console.log(value)
            };
        };
        if (value === " ") {
            // array.splice(index, 1);
            return "there is a space";
        };
    });

    const filterArray = array.filter(value => letters.includes(value) || numbers.includes(value))

    const stringReg = filterArray.join('');
    const arrayRev = filterArray.reverse();
    const stringRev = arrayRev.join('');
    if (stringRev === stringReg) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
