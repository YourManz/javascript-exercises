const removeFromArray = function(array, ...elements) {
    elements.forEach((elmValue) => {
        array.forEach((value, index) => {
            if (value === elmValue) {
                array.splice(index, 1);
            };
        });
    })

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
