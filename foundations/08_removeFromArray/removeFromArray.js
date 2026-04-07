const removeFromArray = function(arr, otherArg) {
    const foundAtIndex = arr.indexOf(otherArg);
    arr.splice(foundAtIndex,1);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
