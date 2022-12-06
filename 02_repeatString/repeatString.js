const repeatString = function(string, num) {
    let result = ''
    const error = ('ERROR')
    if (num >= 0) {
        for (let i = 1; i <= num; i++) {
            result += string
        }
    } else {
        return error
    }
    return result
};

repeatString('hey', 1)

// Do not edit below this line
module.exports = repeatString;
