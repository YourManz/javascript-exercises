const sumAll = function(num1, num2) {
    let sum = 0;
    let sumArray = [];
    if (num1<0 || num2<0) {
        return "ERROR";
    }
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
    }
    if (num1<num2) {
        for (let i=num1; i<=num2; i++) {
            sumArray.push(i);
        };
    } else if (num1>num2) {
        for (let i=num1; i>=num2; i--) {
            sumArray.push(i);
        };
    } else {
        return "ERROR";
    };

    sumArray.forEach((value) => {
        sum += value;
    });
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
