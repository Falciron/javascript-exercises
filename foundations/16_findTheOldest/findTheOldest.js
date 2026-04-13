const findTheOldest = function(peopleArray) {
    const currentYear = new Date().getUTCFullYear();

    return peopleArray.reduce((oldestPerson,currentPerson) => {
        if (oldestPerson === null){
            return currentPerson;
        } else {
            const oldestPersonMaxYear = ("yearOfDeath" in oldestPerson) ? oldestPerson.yearOfDeath : currentYear;
            const oldestPersonAge = oldestPersonMaxYear - oldestPerson.yearOfBirth;
            
            const currentPersonMaxYear = ("yearOfDeath" in currentPerson) ? currentPerson.yearOfDeath : currentYear;
            const currentPersonAge = currentPersonMaxYear - currentPerson.yearOfBirth;

            return (currentPersonAge > oldestPersonAge) ? currentPerson : oldestPerson;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
