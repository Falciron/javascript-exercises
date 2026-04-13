const palindromes = function (phrase) {
    const lowercasePhrase = phrase.toLowerCase();
    const alphaNumOnlyPhrase = lowercasePhrase.replace(/[\W_]/g, '');
    const individualCharArray = alphaNumOnlyPhrase.split("");
    const phraseLength = individualCharArray.length;

    for (let i = 0; i < phraseLength; i++){
        if (individualCharArray[i] !== individualCharArray[phraseLength - 1 - i]) return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
