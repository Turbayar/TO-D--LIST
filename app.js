//Select DOM
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
// const filterOption = document.querySelector(".filter-todo");

//Event Listeners
todoButton.addEventListener("click", addToDo);
// document.addEventListener("DOMContentLoaded", getTodos);
todoList.addEventListener("click", deleteCheck );
// filterOption.addEventListener("click", filterTodo);

//Functions

function addToDo(event){
  event.preventDefault();
  
  //todo div
  const toDoDiv = document.createElement('div');
  toDoDiv.classList.add("todo");

  const newTodo = document.createElement('li');
  
  newTodo.innerHTML = todoInput.value;
  newTodo.classList.add("todo-item");
  toDoDiv.appendChild(newTodo);
  //check mark button

  const completetedButton = document.createElement('button');
  completetedButton.innerHTML = '<i class= "fas fa-check"></i>';
  completetedButton.classList.add("complete-btn");
  toDoDiv.appendChild(completetedButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add('trash-btn');
  toDoDiv.appendChild(trashButton);

  todoList.append(toDoDiv);

  todoInput.value = "";

}


function deleteCheck(e){
  const item = e.target;
  //Delete todo
  if(item.classList[0]  === 'trash-btn'){
    const todo = item.parentElement;
    todo.remove();
  }

  //Check Mark
  if(item.classList[0] === 'complete-btn' ){
    const todo = item.parentElement;
    todo.classList.toggle('completed')
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}