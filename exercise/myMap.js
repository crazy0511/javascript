Array.prototype.myMap = function(cb) {
    var res = [];
    var len = this.length;
    for(var i = 0; i < len; i++){
        res.push(cb(this[i], i));
    }
    return res;
}

// Expected results
const numbers = [1, 2, 3];

//TH1: tham số truyền vào là number
console.log(numbers.myMap(function (number) {
    return number * 2;
}));
// Output: [2, 4, 6]

//TH2: tham số truyền vào là number và index
console.log(numbers.myMap(function (number, index) {
    return number * index;
}));
// Output: [0, 2, 6]