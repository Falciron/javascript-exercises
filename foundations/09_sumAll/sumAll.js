const sumAll = function(int1, int2) {
    if (int1 < 0 || int2 < 0 || !Number.isInteger(int1) || !Number.isInteger(int2)){
        return "ERROR";
    }

    const startInt = Math.min(int1,int2);
    const endInt = Math.max(int1,int2);

    let runningTotal = 0;
    for (let currentInt = startInt; currentInt <= endInt; currentInt++){
        runningTotal += currentInt;
    }

    return runningTotal;
};

// Do not edit below this line
module.exports = sumAll;
