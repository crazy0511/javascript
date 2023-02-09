/*
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport (sports){
    var res = sports.filter(function(sport){
        return sport.like > 5;
    });
    return res;
};


// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]
*/

Array.prototype.myFilter = function(cb) {
    var result = [];
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var check = cb(this[index], index, this);
            if(check){
                result.push(this[index]);
            }
        }
    }
    return result;
}



//Expected results:

const numbers = [1, 2, 3, 4];

console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
})); 
//Output: [2, 4]

console.log(numbers.myFilter(function (number, index) {
    return index % 2 === 0;
})); 
//Output: [1, 3]

console.log(numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
})); 
//Output: [1, 2, 3, 4]





