const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
const fruitList = document.querySelector(".fruits");

for(let i=0;i<fruits.length;i++){
   // get fruits from the list
   const fruit = fruits[i];
   
   // create a new li element
   const li = document.createElement('li');
   li.innerText = fruit;
   fruitList.appendChild(li);
}
const inp = document.querySelector(".InputValue");
const add = document.querySelector(".addButton");

add.addEventListener('click', function(){
   const fruit = inp.value
   const li = document.createElement('li');
   li.innerText = fruit;
   fruitList.appendChild(li);
   

}) 