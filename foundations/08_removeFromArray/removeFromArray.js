const removeFromArray = function() {
    const argumentArray = Array.from(arguments);
    const workingArray = argumentArray[0];
    const itemsToRemove = argumentArray.slice(1);
    return workingArray.filter((item) => !itemsToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
