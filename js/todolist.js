const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

let toDos = [];

function savedTodos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function handleTodoSubmit(event) {
  event.preventDefault();

  const todo = todoInput.value;
  todoInput.value = "";

  const todoObj = {
    text: todo,
    id: Date.now(),
  };
  toDos.push(todoObj);
  makeTodoText(todoObj);
  savedTodos();
}

function makeTodoText(todo) {
  const li = document.createElement("li");
  li.id = todo.id;
  //console.log(typeof todo.id); = number
  const span = document.createElement("span");
  span.innerText = todo.text;

  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);

  todoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
}

function deleteTodo(event) {
  // 클릭한 버튼의 부모가 누구인지를 찾아서 제거해줘야 한다.
  const liParent = event.target.parentElement;
  liParent.remove();

  // console.log(typeof liParent.id); = string
  toDos = toDos.filter((todo) => todo.id !== parseInt(liParent.id));

  savedTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodo = localStorage.getItem("todos");
if (savedTodo !== null) {
  const parsedTodo = JSON.parse(savedTodo);
  toDos = parsedTodo;
  // 처음 시작할 때 toDos가 빈 array이기 때문에
  // savedTodo를 JSON.parse해준 parsedTodo로 교체해줘야한다.
  // 이렇게 해줘야 todoList 부분에 저장된 todo가 보인다.
  parsedTodo.forEach(makeTodoText);
}

// 포커스 얻으면 placeholder 숨기기
const focus = "focus";

function handleFocusIn() {
  todoInput.placeholder = "";
}

function handleFocusOut() {
  todoInput.placeholder = "Write your To-Do";
}

todoInput.addEventListener("focusin", handleFocusIn);
todoInput.addEventListener("focusout", handleFocusOut);
