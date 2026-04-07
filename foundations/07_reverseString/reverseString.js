const reverseString = function(str) {
    const charArray = str.split("");
    let reversedArray = charArray.reverse();
    return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
