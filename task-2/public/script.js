

var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var add1 = document.getElementById('add1');
var add2 = document.getElementById('add2');
var todolist1 = document.getElementById('todolist1');
var todolist2 = document.getElementById('todolist2');



//left
todos = [];

add2.addEventListener('click', (e) => {
    todos.push(input2.value);
    addlist(input2.value);
    input2.value = "";

});



function addlist(arrange) {
    let list = document.createElement('p');
    list.innerText = arrange;
    todolist1.appendChild(list);

 list.addEventListener('dblclick', () => {
         todolist1.removeChild(list);
                
            });

}
//right

todos2 = [];

add1.addEventListener('click', (e) => {
    todos2.push(input1.value);
    addtodo(input1.value);
    input1.value = "";

 

});

function addtodo(todo) {
    let list = document.createElement('p');
    list.innerText = todo;
    todolist2.appendChild(list);

    list.addEventListener('dblclick', () => {
        todolist2.removeChild(list);
        
    });

}



function myFunction() {
    // Get the lists
    let list1 = document.getElementById('todolist1');
    let list2 = document.getElementById('todolist2');


    // Store the HTML content of the lists
    let list1Content = list1.innerHTML;
    let list2Content = list2.innerHTML;
    
    // Exchange the HTML content between the lists
    list1.innerHTML = list2Content;
    list2.innerHTML = list1Content;
   
// //Align and remove the items

       
    
    
  
    let todoItems = todolist1.querySelectorAll('p');
    todoItems.forEach(item => {
        item.addEventListener('dblclick', () => {
            todolist1.removeChild(item);
            remove(item.innerText);
        });
    });


    let todoItems1 = todolist2.querySelectorAll('p');
    todoItems1.forEach(item => {
        item.addEventListener('dblclick', () => {
            todolist2.removeChild(item);
            remove(item.innerText);
        });
    });
 }
