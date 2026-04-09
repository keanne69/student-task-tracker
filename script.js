loadTasks();

function addTask() {

let taskInput = document.getElementById("taskInput");
let priority = document.getElementById("priority").value;
let deadline = document.getElementById("deadline").value;

let task = taskInput.value;

if(task === "") return;

let taskObj = {
task: task,
priority: priority,
deadline: deadline,
done: false
};

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.push(taskObj);

localStorage.setItem("tasks", JSON.stringify(tasks));

taskInput.value = "";

loadTasks();

}

function loadTasks() {

let taskList = document.getElementById("taskList");

taskList.innerHTML = "";

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach((t, index) => {

let li = document.createElement("li");

li.classList.add(t.priority.toLowerCase());

if(t.done) li.classList.add("done");

li.innerHTML = `
<div>
<strong>${t.task}</strong><br>
Priority: ${t.priority} <br>
Deadline: ${t.deadline || "None"}
</div>

<div>
<button onclick="markDone(${index})">✔</button>
<button onclick="deleteTask(${index})">❌</button>
</div>
`;

taskList.appendChild(li);

});

}

function markDone(index) {

let tasks = JSON.parse(localStorage.getItem("tasks"));

tasks[index].done = !tasks[index].done;

localStorage.setItem("tasks", JSON.stringify(tasks));

loadTasks();

}

function deleteTask(index) {

let tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.splice(index, 1);

localStorage.setItem("tasks", JSON.stringify(tasks));

loadTasks();

}
