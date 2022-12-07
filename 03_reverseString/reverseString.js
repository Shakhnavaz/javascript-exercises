const reverseString = function(string) {
    let result
    splitting = string.split("")
    reversing = splitting.reverse()
    joining = splitting.join("")
    return joining
};

reverseString('hello')

// Do not edit below this line
module.exports = reverseString;
