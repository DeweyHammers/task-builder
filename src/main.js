const tasksUl = document.querySelector("#tasks");

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  Task.handleNewTaskForm();
});
