//countdown
// function countdown(num){
//     if(num > 0){
//         console.log('Số: ' + num);
//         return countdown(num - 1);
//     }
//     return num;
// }
// countdown(5);
cd 
//loop
// function loop(start, end, cb){
//     if(start < end){
//         cb(start);
//         return loop(start + 1, end, cb);
//     }
// }

// var arr = ['JS', 'PHP', 'Java'];
// loop(0, arr.length, function(index){
//     console.log(arr[index]);
// });

//Giai thừa
function giaiThua (number){
    if(number > 0){
        return number * giaiThua(number - 1);
    }
    return 1;
}

console.log(giaiThua(6));