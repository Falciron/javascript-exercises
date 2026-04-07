const removeFromArray = function() {
    const workingArray = arguments[0];

    for (let i = 1; i < arguments.length; i++){
        const searchTerm = arguments[i];
        const foundAtIndex = workingArray.indexOf(searchTerm);
        workingArray.splice(foundAtIndex,1);
    }
    
    return workingArray;
};

// Do not edit below this line
module.exports = removeFromArray;
