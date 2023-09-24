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

// GetElementByClassName

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
// items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'green';
items[2].style.backgroundColor = 'green';

// items.style.fontWeight = 'bold';

for(let i = 0 ; i < items.length ; i++){
  items[i].style.fontWeight = 'bold';
}
