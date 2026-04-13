const palindromes = function (word) {
    const wordLength = word.length;
    const lettersToCheck = Math.floor(wordLength/2);
    const wordArray = word.split("");

    for (let i = 0; i < lettersToCheck; i++){
        if (wordArray[i] !== wordArray[wordLength - 1 - i]) return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
