const todoList = [
  { name: "make a dinner", dueDate: "2025-08-14" },
  { name: "wash a car", dueDate: "2025-08-23" },
];
renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject, index) => {
    // const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="todoList.splice(${index}, 1);
    renderTodoList();" class="delete-button">Delete</button>
    `;
    todoListHTML += html;
  });

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  console.log(inputElement.value);
  todoList.push({
    // name: name,
    // dueDate: dueDate,
    name,
    dueDate,
  });
  inputElement.value = "";
  dateInputElement.value = "";

  renderTodoList();
}
