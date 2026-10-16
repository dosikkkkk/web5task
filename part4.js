let tasks = [];

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const counter = document.getElementById("counter");

function render() {
  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = tasks[i].text;
    if (tasks[i].done) {
      span.classList.add("completed");           
    }
    span.addEventListener("click", function () {
      tasks[i].done = !tasks[i].done;             
      render();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-sm btn-danger";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      tasks.splice(i, 1);                         
      render();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }

  const doneCount = tasks.filter(function (t) { return t.done; }).length;
  counter.textContent = tasks.length === 0
    ? "No tasks yet."
    : "Completed: " + doneCount + " of " + tasks.length;
}

function addTask() {
  const value = taskInput.value.trim();
  if (value === "") {
    return;                                       
  }
  tasks.push({ text: value, done: false });
  taskInput.value = "";
  taskInput.focus();
  render();
}

document.getElementById("addTaskBtn").addEventListener("click", addTask);
taskInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

render();
