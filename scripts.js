    const todoInput = document.getElementById('new-todo');
    const addButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');

    // Funktion um eine Aufgabe hinzuzufügen die gespeichert wird
function addTodo() {
  const todoText = todoInput.value.trim();
  if (!todoText) return;

  const listItem = document.createElement('li');

  // Checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  checkbox.addEventListener('change', () => {
    listItem.classList.toggle('completed', checkbox.checked);
  });

  // Text
  const textSpan = document.createElement('span');
  textSpan.textContent = todoText;

  // Löschen-Button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Löschen';
  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(listItem);
  });

  listItem.appendChild(checkbox);
  listItem.appendChild(textSpan);
  listItem.appendChild(deleteBtn);

  todoList.appendChild(listItem);

  todoInput.value = '';
  todoInput.focus();
}


    // Klick auf Button
    addButton.addEventListener('click', addTodo);

    // Enter-Taste im Input
    todoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addTodo();
    });