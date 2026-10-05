// Task manager logic — Student 2 (feature/task-search)

const taskForm = document.getElementById("task-form");
const titleInput = document.getElementById("task-title");
const descInput = document.getElementById("task-description");
const taskList = document.getElementById("task-list");
const searchInput = document.getElementById("task-search");

let tasks = [];
let nextId = 1;

// Add a task from the form
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = titleInput.value.trim();
  if (title === "") return;

  tasks.push({
    id: nextId++,
    title: title,
    description: descInput.value.trim(),
    completed: false,
  });

  taskForm.reset();
  titleInput.focus();
  renderTasks();
});

// Toggle completed state
function toggleTask(id) {
  const task = tasks.find(function (t) { return t.id === id; });
  if (task) task.completed = !task.completed;
  renderTasks();
}

// Delete a task
function deleteTask(id) {
  tasks = tasks.filter(function (t) { return t.id !== id; });
  renderTasks();
}

// Live search filter (case-insensitive, matches the task title)
if (searchInput) {
  searchInput.addEventListener("input", renderTasks);
}

// Render the task list, applying the current search filter
function renderTasks() {
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const visible = tasks.filter(function (t) {
    return t.title.toLowerCase().includes(query);
  });

  taskList.innerHTML = "";

  if (visible.length === 0) {
    const note = document.createElement("li");
    note.className = "empty-note";
    note.textContent = tasks.length === 0
      ? "No tasks yet — add your first task above."
      : "No tasks match your search.";
    taskList.appendChild(note);
    return;
  }

  visible.forEach(function (task) {
    const item = document.createElement("li");
    item.className = "task-item" + (task.completed ? " completed" : "");

    const text = document.createElement("div");
    const title = document.createElement("div");
    title.className = "task-title";
    title.textContent = task.title;
    text.appendChild(title);

    if (task.description) {
      const desc = document.createElement("div");
      desc.className = "task-desc";
      desc.textContent = task.description;
      text.appendChild(desc);
    }

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const completeBtn = document.createElement("button");
    completeBtn.className = "complete-btn";
    completeBtn.textContent = task.completed ? "Undo" : "Done";
    completeBtn.addEventListener("click", function () { toggleTask(task.id); });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () { deleteTask(task.id); });

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    item.appendChild(text);
    item.appendChild(actions);
    taskList.appendChild(item);
  });
}

renderTasks();
