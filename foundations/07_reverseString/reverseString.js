const reverseString = function(str) {
    const charArray = str.split("");
    let reversedString = "";
    for (const char of charArray){
        reversedString = char + reversedString;
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
