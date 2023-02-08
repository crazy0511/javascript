// 1. Hàm alert
// alert("Hi, Javascript basic");

// 2. Hàm console
// console.log("Hàm console");

//3. Hàm confirm
// confirm('Xác nhận bạn đủ tuổi');

//4. Hàm prompt
// var str = 'Xac nhan ban da du 18 tuoi';
// prompt(str);

//5. Hàm setTimeour
//Sau 1s thì function thực hiện
// setInterval(function() {
//     console.log("Số: " + Math.floor(Math.random()*10));
// }, 1000);

//Hàm setInterval
//Cứ 1s thì function chạy 1 lần
// setInterval(function() {
//     console.log("Số: " + Math.floor(Math.random()*10));
// }, 1000);

/**
 * 1. Mồng 1
 * 2. Mồng 2
 * 3. Mồng 3
 * 4. Mồng 4
 */

/*
1. Mồng 1 
2. Mồng 2
*/
/*
var number = 1;

number++; // dùng làm hậu tố, ++ ở phía sau biến
console.log(number); // 2

number++;
console.log(number); // 3

var a = 5;
var b = a++;
// ++ là hậu tố thì b nhận giá trị a ban đầu
// b = 5
// a = 6

var a = 5;
var b = ++a;
// ++ là tiền tố thì b nhận giá trị a + 1
// b = 6
// a = 6
*/

// var firstName = 'Tu';
// var lastName = 'Pham';
// var fullName = firstName + ' ' + lastName;
// console.log(fullName);


// var isSuccess = 1 > 2; //isSuccess = false
// if(isSuccess){
//     console.log('Điều kiện đúng');
// }
// else{
//     console.log('Điều kiện sai');
// }

// if(/*điều kiện*/){
//     // câu lệnh thực hiện nếu điều kiện là true
// }
// else{
//     // câu lệnh thực hiện nếu điều kiện là false
// }

var a = 1;
// if(!(a > 0)){
//     console.log('Đúng');
// }
// else{
//     console.log('Sai');
// }

// Function
// var myFunction = function(){
//     alert('Happy new year');
// }

// myFunction();

//Object
// var myObject = {
//     name : 'Phạm Quang Tú',
//     age: 23,
//     myFunction: function(){
//         alert('Thông tin sinh viên')
//     }
// };

// var myArray = ['Python', 'Js', 'PHP'];

/*
var a = 1;
console.log(typeof a);

var a = '1';
var b = 2;

var c = typeof a; //string
var d = typeof b; //number
var e = typeof d; //string

console.log(c, d, e) // Output: ?
*/

/*
function showDialog(){
    alert('Hi, xin chao cac ban!');
}

showDialog();
*/

/*
function writeLog(mes, content){
    console.log(mes);
    console.log(content)
}

writeLog(2023, 'Happy new year');
*/

/*
function writeLog(){
    console.log(arguments);
}

writeLog(2019, '2020', 2021, 2022, '2023');
*/

/*
function writeLog(){
    var str = '';
    for (var i of arguments){
        str += `${i} -`;
    }
    console.log(str);
}
writeLog('Happy', 'New', 'Year');
*/

/*
var isConfirm = confirm('Message?');
console.log(isConfirm);
//Nếu chọn "OK" thì kết quả là true
//Nếu chọn "Cancel" thì kết quả là false
*/

// function showMessage(){
//     console.log('Phạm Quang Tú');
// }
// showMessage();

// var sum = function(a, b){
//     console.log(a+b);
// }
// sum(10, 20);

// //Cách 1: ưu tiên
// var fullName = 'Phạm Quang Tú';

// //Cách 2: typeof là object
// var YoB = new String('2001');

//Sử dụng backslash (\)
// var fullName = 'Phạm Quang Tú là \'người đặc biệt\'';
// console.log(fullName)

//Xem độ dài của chuỗi
// var fullName = 'Phạm Quang Tú';
// console.log(fullName.length);

//Template string trong ES6
// var firstName = 'Phạm Quang';
// var lastName = 'Tú';
// var fullName = `Tôi tên là ${firstName} ${lastName}`;
// console.log(fullName)

/*
var myString = 'Học JS JS';
//1. Length
console.log(myString.length);

//2. Find index
console.log(myString.indexOf('JS'));
//Tìm từ vị trí thứ 6
console.log(myString.indexOf('JS', 6));

//3. cut string
var myString = 'Học JS JS';
console.log(myString.slice(4,6));
console.log(myString.slice(-5,-1));

//4. Replace
var myString = 'Học JS làm JS';
console.log(myString.replace('JS', 'Javascript'));
console.log(myString.replace(/JS/g, 'JavaScript'));

//5. Convert to upper case
var myString = 'Học JS làm JS';
console.log(myString.toUpperCase());
//6. Convert to lower case
console.log(myString.toLowerCase());

//Trim: loại bỏ khoảng trắng ở đầu và cuối
var myString = '     Học JS làm JS     ';
console.log(myString.trim());

//split
var languages = 'JS, PHP, Java';
console.log(languages.split(', '));

//9. get a character by index
var str = 'Phạm Quang Tú';
console.log(str.charAt(0));
console.log(str[1]);
*/

/*
var age = 18;
//1. Chuyển number thành string
console.log('1. Chuyển number thành string')
console.log(typeof age.toString());
//2. Làm tròn
console.log('2. Làm tròn')
var tmp = 3.12345;
console.log(tmp.toFixed(2));
console.log(tmp.toFixed(4));
*/

/*
function isNumber(value) {
    return typeof value === 'number';
}

var value = '200';
if(typeof value === 'number'){
    console.log('Yes');
}
*/

/*
var languages = [
    'Javascript',
    'PHP',
    'Ruby',
];
//Lấy phần tử theo index
console.log(languages[1]);
*/

// var fe = [
//     'HTML',
//     'CSS',
//     'JS',
//     'ReactJS'
// ]


// //9. slice: cắt mảng
// console.log(fe.slice(1,3));



//5. function key: value 
// var emailKey = 'email';
// var myInfo = {
//     name: 'Phạm Quang Tú',
//     age: 23,
//     address: 'Quảng Ninh',
//     [emailKey]: 'phamquangtu@gmail.com',
//     getName: function(){
//         return 'Họ và tên: ' + this.name;
//     }
// };
// console.log(myInfo.getName());

//Function: Phương thức / method
//Others: Thuộc tính / property

/*
//Object prototype
function User (firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
}

User.prototype.className = 'F8';
User.prototype.getClassName = function(){
    return this.className;
}
var user = new User('Tú', 'Phạm', 'phamquangtu.jpg');
console.log(user);
console.log(user.getClassName());
*/

//Đối tượng Date
// var date = new Date();
// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();
// console.log(`Ngày/Tháng/Năm: ${day}/${month}/${year}`);

/* Math
//1. Math.PI
console.log(Math.PI);

//2. Math.round()
console.log(Math.round(1.5));
console.log(Math.round(1.4));

//3. Math.abs(): trị tuyệt đối
console.log(Math.abs(-5));

//4. Math.ceil(): Làm tròn trên
console.log(Math.ceil(4.123));

//5. Math.floor(): Làm tròn dưới
console.log(Math.floor(4.666));

//6. Math.random(): [0,1]
console.log(Math.random());
//Random từ 0 đến 5
var random = Math.floor(Math.random() * 5);
var bonus = ['10 coin', '20 coin', '30 coin', '40 coin', '50 coin'];
console.log(bonus[random]);

//7. Math.min()
console.log(Math.min(-100, 0, 20, 30, 100));

//8. Math.max()
console.log(Math.max(-100, 0, 20, 30, 100));
*/

/*
var bonus = ['1 coin', '5 coin', '10 coin', '100 coin'];
console.log(bonus.length);
function getRandomItem(bonus){
    var random = Math.floor(Math.random() * 4);
    return bonus[random];
}

console.log(getRandomItem(bonus));
*/
/*if ... else
var date = 4;
if (date === 2){
    console.log('Hôm nay là thứ 2');
} else if(date === 3){
    console.log('Hôm nay là thứ 3');
} else{
    console.log('Không biết');
}
*/

/*
var date = 6;
switch (date) {
    case 2:
        console.log('Hôm nay là thứ 2');
        break;
    case 3:
        console.log('Hôm nay là thứ 3');
        break;
    case 4:
        console.log('Hôm nay là thứ 4');
        break;
    case 5:
        console.log('Hôm nay là thứ 5');
        break;
    default: 
        console.log('Không biết');
}
*/

/*
var course = {
    name: 'Javacript',
    coin: 0
}

var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí';
console.log(result); 
*/

//For loop
// var i = 1;
// for (; i <= 5;){
//     console.log(i);
//     i++;
// }

// var languages = ['Js', 'PHP', 'Java', 'Python'];
// var len = languages.length;
// for(var i = 0; i < len; i++){
//     console.log(languages[i]);
// }

// var myInfo = {
//     name: 'Pham Quang Tu',
//     age: 23,
//     address: 'Quang Ninh'
// }

// for(var key in myInfo){
//     console.log(key);
//     console.log(myInfo[key]);
//     console.log("----------------");
// }

// var languages = ['PHP', 'Js', 'Python'];
// for(var key of languages){
//     console.log(key);
//     console.log('-----------------');
// }
// var text = 'TuCoi';
// for(var value of text){
//     console.log(value);
// }

//while loop
// var i = 1;
// while(i <= 5){
//     console.log(`Lần thứ ${i}`);
//     i++;
// }

// do/while loop
// var i = 0;
// do {
//     i++;
//     console.log(` Lần thứ ${i}`);
// } while (i < 5)

//Break & continue in loop
// for(var i = 0; i < 10; i++){
//     console.log('Lần thứ ' + i);
//     if(i == 5){
//         break;
//     }
// }

// for(var i = 0; i < 10; i++){
//     if( i % 2 !== 0){
//         continue;
//     }
//     console.log('Số chẵn: ' + i);
// }

//Vòng lặp lồng nhau - Nested loop
// var arr = [
//     [1,2],
//     [3,4],
//     [5,6]
// ];
// for(var i = 0; i < arr.length; i++){
//     for(var j = 0; j < arr[i].length; j++){
//         console.log('Giá trị: ' + arr[i][j]);
//     }
// }

// var sum = 0;
// for(var i = 0; i <= 100; i+=5){
//     console.log(i);
//     sum += i;
// }
// console.log('Tổng số chia hết cho 5 từ 0 đến 100: ' + sum);

//1. Xác định điểm dừng
//2. Logic handle ==> Tạo ra điểm dừng 

/*
    Array methods:
        forEach()
        every()
        some()
        find()
        filter()
        map()
        reduce()
*/

/*
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 300
    },
    {
        id: 2,
        name: 'Java',
        coin: 0
    },
    {
        id: 3,
        name: 'HTML & CSS',
        coin: 200
    },
    {
        id: 4,
        name: 'Java',
        coin: 300
    },
]

//1. forEach
courses.forEach(function(course) {
    console.log(course)
}); 

//2. every: kiếm tra đến từng phần tử trong arr
var isFree = courses.every(function(course, index){
    console.log('index = '  + index);
    return course.coin === 0;
});
console.log('Khóa học có miễn phí không: ' + isFree);

//3. some: 1 phần tử thỏa mãn --> true
var isFree = courses.some(function(course, index){
    console.log('index = '  + index);
    return course.coin === 0;
});
console.log('Khóa học có miễn phí không: ' + isFree);
console.log('----------------------------');

//4. find: trả về 1 phần tử trong mảng
var course = courses.find(function(course){
    return course.name === 'Java';
})
console.log(course);
console.log('----------------------------');

//5. filter: trả về tất các các phần từ thỏa mãn
var course = courses.filter(function(course, index){
    console.log(index);
    return course.name === 'Java';
})
console.log(course);
*/

/*
//Array map
function coursesHandler (course){
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`
    };
}

var newCourses = courses.map(coursesHandler);
console.log(newCourses);
*/

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 300
    },
    {
        id: 2,
        name: 'Java',
        coin: 0
    },
    {
        id: 3,
        name: 'HTML & CSS',
        coin: 200
    },
    {
        id: 4,
        name: 'Python',
        coin: 300
    },
];
//Array reduce
//Ví dụ: tính tổng giá coin của tất cả các course
//accumulator: biến lưu trữ kết quả
var i = 0;
function coinHandler (accumulator, currentValue, currentIndex, originArray) {
    i++;
    var total = accumulator + currentValue.coin;
    console.table({
        'Lượt chạy: ': i,
        'Biến tích trữ: ': accumulator,
        'Giá khóa học: ': currentValue.coin,
        'Tích trữ được: ': total
    });
    return total;
}
//Giá trị khởi tạo cho totalCoin = 0
var totalCoin = courses.reduce(coinHandler, 0); //initial value
console.log(totalCoin);