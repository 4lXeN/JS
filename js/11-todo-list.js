const todoListSimple = ["make dinner", "wash dishes"];

renderTodoList();
function renderTodoList() {
  let todoListHTML = "";

  for (i = 0; i < todoListSimple.length; i++) {
    const todo = todoListSimple[i];

    const html = `
    <p>
    ${todo}     
    </p>
    `;
    todoListHTML += html;
    document.querySelector(".js-todo-list").innerHTML = todoListHTML;
  }
  // Konsola Hangi html kodlarını dönüştürdüğünü gösterir.
  // console.log(todoListHTML);
}

function addTodoSimple() {
  const inputElement = document.querySelector(".js-simple-input-1");

  const name = inputElement.value;
  console.log(name);

  todoListSimple.push(name);

  console.log(todoListSimple);

  inputElement.value = ""; //bu satır tuşa basıldığında input tagının içini boşaltır
  renderTodoList();
}

const todoListSimple2 = ["Alperen"];
renderTodoList2();
function addTodoSimple2() {
  const inputElement = document.querySelector(".js-simple-input-2");
  const name = inputElement.value;

  todoListSimple2.push(name);
  console.log(todoListSimple2);
  inputElement.value = "";
  // for(let i = 0; i < todoListSimple2; i++)
  // {

  // }
  renderTodoList2();
}
function renderTodoList2() {
  let todoListHTML = "";

  for (let i = 0; i < todoListSimple2.length; i++) {
    const todo = todoListSimple2[i];
    const html = `
    <p> ${todo}
    <button onClick=" 
    todoListSimple2.splice(${i}, 1);
    renderTodoList2();"
    class="delete-btn">Delete</button>
    </p>
    `;
    todoListHTML += html;
    document.querySelector(".js-todo-list-2").innerHTML = todoListHTML;
  }
}
