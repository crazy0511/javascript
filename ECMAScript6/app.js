/* var, let, const
let a = "Phạm Quang Tú";
if(true){
    a = 'Nguyễn Thị Mến';
}
console.log(a);
*/

/*
var courseName = 'JavaScript';
var description = `Course Name: ${courseName}`;
console.log(description);

var lines = `Line 1
Line 2
Line 3`;
console.log(lines);
*/

// const sum1 = (a, b) => {
//     return a + b;
// }
// //Nếu sau => không phải {}, hiểu là return 
// const sum2 = (a, b) => a + b;
// console.log(sum1(2, 3));
// console.log(sum2(2, 3));

// //Ghi {} (Object) bằng cách sử dụng ()
// const des = (a, b) => ({Name: a, Age: b})
// console.log(des('Phạm Quang Tú', 22));

//Nếu truyền vào 1 tham số thì không cần ()
// const name = a => {
//     return `Họ và tên: ${a}`;
// }
// console.log(name('Phạm Quang Tú'));

//Arrow function không khởi tạo được Constructor
// const Course = (name, price) => {
//     this.name = name;
//     this.price = price;
// };

// const jsCourse = new Course('Javascript', 2000);
// console.log(jsCourse);

// class Course {
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }

//     getName(){
//         return this.name;
//     }
//     getPrice(){
//         return this.price;
//     }
// }

// var phpCourse = new Course('PHP', 2000);
// console.log(phpCourse);
// console.log(phpCourse.getName());
// console.log(phpCourse.getPrice());

// function logger(log = 'Giá trị mặc định'){
//     console.log(log);
// }
// logger();
// logger('Phạm Quang Tú');

// 1. Định nghĩa key: value cho object
// var language = 'Javascript';
// var price = 1000;
// var course = {
//     language,
//     price,
//     getName(){
//         return language;
//     }
// };
// console.log(course.getName());

// 2. Định nghĩa method cho object
// var language = 'Javascript';
// var price = 1000;
// var course = {
//     language,
//     price,
//     getName(){
//         return language;
//     }
// };
// console.log(course.getName());


// 3. Định nghĩa key cho oobject dươc dạng biến 
// var fieldName = 'name';
// var fieldPrice = 'price';
// const course = {
//     [fieldName]: 'Javascript',
//     [fieldPrice]: 1000
// }
// console.log(course);

// Destructuring
// var array = ['Javascript', 'PHP', 'Ruby'];
// var [a, b, c] = ['Javascript', 'PHP', 'Ruby'];
// console.log(a, b, c);
// console.log('-----------------');
// var [a1, , a3] = array;
// console.log(a1, a3);

// Rest parameters
// var array = ['Javascript', 'PHP', 'Ruby'];
// var [s1, ...rest] = array;
// console.log(s1);
// console.log(rest);


/*
var course = {
    name: 'Javascript',
    price: 1000, 
    image: 'image-address',
    children: {
        name: 'ReactJS'
    }
};
// Đối tên
var {name: parentName, children: {name: childrenName}} = course;
console.log(parentName);
console.log(childrenName);
console.log('------------------------');
// var {name, ...rest} = course;
// console.log(name, rest);

function rest(...params){
    console.log(params);
}
rest(1,2,3,4,5);
*/

//Spread - array
// var array1 = ['Javascript', 'Ruby', 'PHP'];
// var array2 = ['ReactJS', 'Dart'];
// var array3 = [...array1, ...array2];
// console.log(array3);
// // Spread - object
// var object1 = {
//     name: 'Phạm Quang Tú',
//     address: 'Quảng Ninh'
// }
// var object2 = {
//     age: 22,
//     job: 'Student'
// }
// var object3 = {
//     ...object1,
//     ...object2
// }
// console.log(object3);

// const person1 = {
//     name: 'Son',
//     age: 21
// }

// const person2 = {
//     ...person1
// }

// // Expected results
// console.log(person2.name) // Output: 'Son'
// console.log(person2.age) // Output: 21
// console.log(person1 === person2) // Output: false

/*
// Tagged template literals: Chữ mẫu được gắn thẻ
function highlight(...rest){
    console.log(rest);
} 
var band = 'F8';
var course = 'Javascript';
highlight` Học lập trình môn ${course} tại ${band}`;


function highlight([first, ...strings], ...values){
    return values.reduce(
        (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
        [first]
    )
    .join('');
}
var band = 'F8';
var course = 'Javascript';
const html = highlight` Học lập trình môn ${course} tại ${band}`;
console.log(html);
*/

// app.js
// import logger from './logger.js';
// logger('Phạm Quang Tú');

// Cách 1:
// import {name, age} from './logger.js';
// console.log(name);
// console.log(age);
// Cách 2:
// import * as tmp from './logger.js';
// console.log(tmp);
// console.log(tmp.name);
// console.log(tmp.age);

const obj = {
    name: 'Alice',
    cat:{
        name: 'Cat',
        dog: {
            name: 'Dog'
        }
    }
}
console.log('Câu lệnh 1');
if(obj.cat?.dog?.pig){
    console.log(obj.cat.dog.pig);
}

console.log('Câu lệnh 2');
if(obj.cat?.dog){
    console.log(obj.cat.dog);
}