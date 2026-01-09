 <script>
    const todoInput = document.getElementById('new-todo');
    const addButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');

    // Funktion um eine Aufgabe hinzuzufügen
    function addTodo() {
      const todoText = todoInput.value.trim();
      if (!todoText) return;

      const listItem = document.createElement('li');
      listItem.textContent = todoText;

      // Löschen-Button erstellen
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Löschen';
      deleteBtn.addEventListener('click', () => {
        todoList.removeChild(listItem);
      });

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
  </script>