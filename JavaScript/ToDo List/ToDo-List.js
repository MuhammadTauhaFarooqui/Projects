/*
Main idea of JavaScript.
1. Save the data.
2. Generate the data.
3. Make it interactive.

Algorithm to create a Todo List
Create an Array To store the Todo's.
When we click Add button, get the text from the input element.
add the input into the array.
display the array.
*/

//Initialize an Array
const todoList = [{
  name: 'make-dinner',
  dueDate: '2022-12-22'
},{
  name: 'wash-dishes',
  dueDate: '2022-12-22'
}]; 
  


renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  todoList.forEach((todoObject, index) =>{
    const { name, dueDate} = todoObject;
    //Generating the HTML, so that each to do task appear on seperate line.
    const html = `
     
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
    
    `; 
    todoListHTML+=html;
  }); 
  //now we select the div element inside the javascript code.
  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML ;

  //we add the event Listener when html is displayed on the page.
  document.querySelectorAll('.js-delete-todo-button')//returns the list of the buttons with the specified class having index just like an array.  
    .forEach((deleteButton, index)=>{
      deleteButton.addEventListener('click', ()=>{
        //console.log(index); //This feature is called closure.
        //Closure is a feature of a function.
        //If a function has access to a value, it will always have access to that value.
        todoList.splice(index, 1); 
        renderTodoList();
      });
    }); 
  //console.log(index); as we end for each loop, index doesn't exist anymore.
}

document.querySelector('.js-add-todo-button').addEventListener('click', ()=>{addTodo();});


function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    /*
    Shorthand property 
    Shortcut for this code
    */
    name,
    dueDate

  });
  
  console.log(todoList);
  inputElement.value = ''; //to make inputbar empty.

  //When ever we add an element, we also display all the elements.
  renderTodoList();
}


