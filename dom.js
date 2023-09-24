var itemList = document.querySelector('#items');

console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);

itemList.children[1].style.backgroundColor = 'yellow';
console.log(itemList.firstChild);

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

console.log(itemList.firstChild);

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

console.log(itemList.lastChild);

console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 1';

console.log(itemList.nextSibling);

console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);

console.log(itemList.previousElementSibling);

var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title' , 'Hello Div');
var newDivText = document.createTextNode('Hello world');
newDiv.appendChild(newDivText);
console.log(newDiv);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv , h1);



// Adding "Hello world" before "Item Lister"
var itemListTitle = document.querySelector('#header-title');
var helloWorldText = document.createTextNode('Hello world ');
itemListTitle.insertBefore(helloWorldText, itemListTitle.firstChild);

// Adding "Hello 1" before "Item 1"
var firstItem = document.querySelector('#items li:first-child');
var hello1Text = document.createTextNode('Hello 1 ');
firstItem.insertBefore(hello1Text, firstItem.firstChild);
