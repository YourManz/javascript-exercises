const repeatString = function(string, repeatTimes) {
    let stringRepeat = '';
    if (repeatTimes<0) {
        return 'ERROR';
    }
    for (let i=0; i < repeatTimes; i++) {
        stringRepeat += string;
    };
    return stringRepeat;
};

// Do not edit below this line
module.exports = repeatString;
