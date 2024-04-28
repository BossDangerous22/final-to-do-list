// Array to store todos
let todos = [];

// Function to render todos
function renderTodos() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  todos.forEach((todo, index) => {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const todoText = document.createElement('span');
    todoText.textContent = todo.text;
    todoText.classList.add('todo-text');
    if (todo.complete) {
      todoText.classList.add('completed');
    }

    const checkBtn = document.createElement('button');
    checkBtn.textContent = '✓ Done';
    checkBtn.addEventListener('click', () => {
      todos[index].complete = !todos[index].complete;
      renderTodos();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x Delete';
    deleteBtn.addEventListener('click', () => {
      todos.splice(index, 1);
      renderTodos();
    });

    todoDiv.appendChild(todoText);
    todoDiv.appendChild(checkBtn);
    todoDiv.appendChild(deleteBtn);

    todoList.appendChild(todoDiv);
  });
}

// Function to handle form submission
function addTodo(event) {
  event.preventDefault();
  const todoInput = document.getElementById('todo-input');
  const text = todoInput.value.trim();
  if (text !== '') {
    todos.push({ text, complete: false });
    renderTodos();
    todoInput.value = '';
  }
}

// Attach submit event listener to the form
const todoForm = document.getElementById('todo-form');
todoForm.addEventListener('submit', addTodo);

// Initial rendering
renderTodos();
