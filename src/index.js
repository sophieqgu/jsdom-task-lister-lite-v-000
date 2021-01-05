document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementByID('create-task-form');

  function createTask(event) {
      const newListItem = document.createElement('li');
      newListItem.textContent = form.querySelector('new-task-description').value;
      document.getElementByID('tasks').appendChild(newListItem);
      event.preventDefault();
      event.target.reset();
  }

  form.addEventListener('submit', createTask);
});
