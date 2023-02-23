var divElement = document.querySelector('div.red');
divElement.style.backgroundColor = '#f00';
console.log(divElement);

var pElement = document.querySelector('p');
Object.assign(pElement.style, {
    color: '#f05123',
})
console.log(pElement);

