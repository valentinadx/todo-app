const todoInput = document.getElementById('new-todo');
const addButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

function saveTodos() {
  const todos = [];
  document.querySelectorAll('#todo-list li').forEach(li => {
    todos.push({
      text: li.querySelector('span').textContent,
      completed: li.classList.contains('completed')
    });
  });
  localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
  const saved = JSON.parse(localStorage.getItem('todos')) || [];
  saved.forEach(todo => addTodoFromStorage(todo));
}

function addTodo() {
  const todoText = todoInput.value.trim();
  if (!todoText) return;

  addTodoFromStorage({ text: todoText, completed: false });
  todoInput.value = '';
  saveTodos();
}

function addTodoFromStorage(todo) {
  const listItem = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.completed;

  if (todo.completed) listItem.classList.add('completed');

  checkbox.addEventListener('change', () => {
    listItem.classList.toggle('completed', checkbox.checked);
    saveTodos();
  });

  const textSpan = document.createElement('span');
  textSpan.textContent = todo.text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Löschen';
  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(listItem);
    saveTodos();
  });

  listItem.appendChild(checkbox);
  listItem.appendChild(textSpan);
  listItem.appendChild(deleteBtn);
  todoList.appendChild(listItem);
}

addButton.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') addTodo();
});

loadTodos();

