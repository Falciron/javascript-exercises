const fibonacci = function(num) {
    if (num < 0) return "OOPS";

    const fibArray = [];
    for (let i = 0; i <= +num; i++){
        if (i === 0 || i === 1) {
            fibArray.push(i);
        } else {
            fibArray.push(fibArray[i-2] + fibArray[i-1]);
        }
    }

    return fibArray.pop();
};

// Do not edit below this line
module.exports = fibonacci;
