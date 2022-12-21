let tasks = [];

function renderTasks () {
  const taskList = document.getElementById("task-list");
  taskList.replaceChildren();

  for (const item of tasks) {
    const li = document.createElement("li");
    li.innerText = item;
    taskList.appendChild(li);
  }
}

function addTask (event) {
  event.preventDefault();
  
  const inputTask = document.getElementById("input-task");
  tasks.push(inputTask.value);
  inputTask.value = "";
  renderTasks();
}

document.getElementById("task-form").addEventListener("submit", addTask)