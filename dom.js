// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

//  // document.title = "TODOLIST";

//  console.log(document.doctype);
//  console.log(document.head);
//  console.log(document.body);
//  console.log(document.all);
//  console.log(document.all[10]);
//  document.all[10].textContent = 'Hello';

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'List';

// header.style.borderBottom = 'solid 3px #000';


// var Add = document.getElementsByClassName('title');
// Add.style.fontWeight = 'bold';
// Add.style.color = '#008000';

// GetElementByTagName

var items = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
// items[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'green';
li[2].style.backgroundColor = 'green';

// items.style.fontWeight = 'bold';

for(let i = 0 ; i < li.length ; i++){
  li[i].style.fontWeight = 'bold';
}
