
let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderToDo();

document.querySelector('.js-add-todo').addEventListener('click', () => addTasks());

// this will add input tasks into the array (todoList)
function addTasks() {
  let inputElement = document.querySelector('.js-name-input');
  let dateInputElement = document.querySelector('.js-dueDate-input');

  const name = inputElement.value;
  const dueDate = dateInputElement.value;

  todoList.push(
    {
      name,
      dueDate
    }
  );

  renderToDo(); // update the html and display the todo's
  inputElement.value = '';
}

// this will update and display the tasks
function renderToDo() {
  let todoListHtml = '';

  todoList.forEach((todoListObject, index) => {

    const { name, dueDate } = todoListObject;

    const html = `
    <div class="todo-value">${name}</div>
    <div class="todo-value">${dueDate}</div>   
    <button class="delete-todo-btn js-delete-todo">Delete</button>
    `;
    todoListHtml += html;
    document.querySelector(".js-title").innerHTML = 'My Todo';
  });

  document.querySelector('.js-name-input-all')
    .innerHTML = todoListHtml;



  document.querySelectorAll('.js-delete-todo').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      document.querySelector(".js-title").innerHTML = '';
      renderToDo();
    })
  });


  localStorage.setItem('todoList', JSON.stringify(todoList));
}

