// HTML DOM
/**
 * 1. Element: ID, class, tag, CSS selector, HTML collection
 * 2. Attribute
 * 3. Text
 */

//Lấy 1 element theo id
// var headingNode = document.getElementById('heading');
// console.log(headingNode);

//Lấy [element] theo class name
// var headingNodes = document.getElementsByClassName('heading');
// console.log(headingNodes);

//Lấy [element] theo tag name
// var headingNodes = document.getElementsByTagName('p');
// console.log(headingNodes);

//Lấy [element] theo CSS selector
// var headingNodes = document.querySelectorAll('.box .heading');
// console.log(headingNodes);

//Lấy [element] theo HTML collections
// var nodes = document.forms;
// console.log(nodes);


/*
//Get element li từ box-1
//Cách 1: 
var liNodes = document.querySelectorAll('.box-1 li');
console.log(liNodes);
console.log('-------------------------------');

//Cách 2: get box-1, get element
var boxNode = document.querySelector('.box-1');
console.log(boxNode.querySelectorAll('li'));
*/

/*
//Lấy ra element: getElementById, querySelector
//Lấy ra mảng element: còn lại.
//Nếu muốn lấy element gọi phần tử như mảng
var liNodes = document.querySelectorAll('.box-1 li');
console.log(liNodes);
console.log('---------------');
for(var i = 0; i < liNodes.length; i++){
    console.log(liNodes[i]);
}
*/

/*
//Attribute: Thuộc tính
var headingElement = document.querySelector('h2');
//Thêm thuộc tính 'title'
headingElement.title = 'Heading';
//Thêm thuộc tính sử dụng hàm setAttribute
// headingElement.setAttribute('class', 'Hoc_JS');
// headingElement.setAttribute('class', 'JS');

//Lấy thuộc tính
console.log(headingElement.getAttribute('class'));
*/


/*
//Text: chữ
//innerText, textContent

var headingElement = document.querySelector('.heading');
//1. Lấy text của element
//1.1. Sử dụng 'innerText' để lấy text, không nhận khoảng cách
//Cái bạn nhìn thấy
console.log(headingElement.innerText);
console.log('---------------------------');
//1.2. Sử dụng 'textContent' để lấy text, có nhận khoảng cách
//Kèm code 
console.log(headingElement.textContent);

//2. Ghi text cho element
headingElement.innerText = 'New heading';
console.log(headingElement);
*/

/*
// innerHTML, outerHTML
var boxElement = document.querySelector('.box');
console.log(boxElement);
//outerHTML: thay đổi cả thẻ boxElemet
boxElement.outerHTML = '<p>Tôi là phạm quang tú</p>';
*/

/*
//Node properties
var boxElement = document.querySelector('.box');
console.log(boxElement);
//parentElement lấy ra Element cha
console.log(boxElement.parentElement);
console.log(boxElement.parentNode)
*/


/*
//DOM style
var boxElement = document.querySelector('.box');
boxElement.style.width = '100px';
boxElement.style.height = '200px';
boxElement.style.backgroundColor = 'red';

//style inline
Object.assign(boxElement.style, {
    width: '200px',
    height: '200px',
    backgroundColor: 'green',
});
*/

//ClassList Property
// add
// contains
// remove
// toggle

/*
var boxElement = document.querySelector('.box');
//Lấy ra số lượng class
console.log(boxElement.classList.length);
//Lấy ra class
console.log(boxElement.classList[1]);

// add
boxElement.classList.add('red');
console.log(boxElement);

// contains: true/false (kiểm tra class có không?)
console.log(boxElement.classList.contains('red'));

// remove
boxElement.classList.remove('red');
console.log(boxElement);

// // toggle: kiểm tra có class k? 
// // Có: bỏ đi
// // Không: thêm vào
// setInterval(() => {
//     boxElement.classList.toggle('red');
// }, 1000);
*/

//DOM event
//1. Attribute events
// var h1Elements = document.querySelectorAll('h1');
// for(var i = 0; i < h1Elements.length; i++){
//     h1Elements[i].onclick = function(e){
//         console.log(e.target);
//     }
// }

// var buttonElement = document.querySelector('button');
// console.log(buttonElement);
// buttonElement.onclick = function (e){
//     e.target.style.color = '#fff';
// }

/*
//Input
var inputValue = '';
var inputElement = document.querySelector('input[type="text"]');
//Lấy ra value của thẻ input
inputElement.onchange = function(e){
    inputValue = e.target.value;
}
console.log(inputValue);

//Checkbox
var inputElement = document.querySelector('input[type="checkbox"]');
//Lấy ra trạng thái check của thẻ input
inputElement.onchange = function(e){
    console.log(e.target.checked);
}

//select
var selectElement = document.querySelector('select');
console.log(selectElement);
//Lấy ra trạng thái check của thẻ input
selectElement.onchange = function(e){
    console.log(e.target.value);
}
*/

// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onkeyup = function(e){
//     console.log(e);
// }

//2. Asign event using the element node


//1. preventDefault: bỏ hành vi mặc định 
// var aElements = document.querySelectorAll('a');

// for(var i = 0; i < aElements.length; i++){
//     aElements[i].onclick = function(e){
//         if(!e.target.href.startsWith('https://www.youtube.com/')){
//             e.preventDefault();
//         }
//         console.log(e.target.href);
//     }
// }


//2. stopPropagation: dừng sự kiện nổi bột
// document.querySelector('div').onclick = function(){
//     console.log('DIV');
// }
// document.querySelector('button').onclick = function(e){
//     //Ngăn chặn nổi bột ở onclick button
//     e.stopPropagation();
//     console.log('Click me!');
// }

//Event listener
//1. Xử lý nhiều việc khi 1 event xảy ra
//2. Lắng nghe / Hủy bỏ lắng nghe

var btn = document.getElementById('btn');

//Thêm sự kiện: cách 1
btn.addEventListener('click', function(e){
    console.log('Event 1');
});

//Thêm sự kiện: cách 2
function viec(){
    console.log('Việc 2');
}
btn.addEventListener('click', viec);

//Xóa sự kiện
setTimeout(function(){
    btn.removeEventListener('click', viec);
}, 3000);









