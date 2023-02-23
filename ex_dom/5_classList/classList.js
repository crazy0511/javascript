/*
var h1Element = document.querySelector('h1');
h1Element.classList.add('title');
console.log(h1Element);

var pElement = document.querySelector('p');
// pElement.classList[0] = 'sub-title';
pElement.classList.remove('content');
pElement.classList.add('sub-title');
console.log(pElement);
*/

var divElement = document.querySelectorAll('div');
console.log(divElement);

for(var i of divElement){
    console.log(i);
    i.classList.add('box');
}

