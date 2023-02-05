//Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length
//Hàm này sẽ trả về một mảng gồm length phần tử, 
//các giá trị trong mảng là số ngẫu nhiên, 
//giá trị trong khoảng từ min tới max.

//Math.random() * (max - min) + min 
//là cách tạo ra 1 số ngẫu nhiên trong khoảng min - max.

function getRandNumbers (min, max, length){
    var value = Math.random() * (max - min) + min;
    var a = [];
    for (var i = 0; i < length; i++){
        a[i] = value;
    }
    return a;
}

var res = getRandNumbers(5, 10, 10);
console.log(res.length);
console.log(res);