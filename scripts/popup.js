const addTaskBtn = document.getElementById("add-task-btn");
addTaskBtn.addEventListener("click", () => addTask());

function addTask() {
    const taskRow = document.createElement("div");

    const text = document.createElement("input");
    text.type = "text";
    text.placeholder = "Enter your task...";

    const deleteBtn = document.createElement("input");
    deleteBtn.type = "button";
    deleteBtn.value = "X";

    taskRow.appendChild(text);
    taskRow.appendChild(deleteBtn);

    const taskContainer = document.getElementById("task-container");
    taskContainer.appendChild(taskRow);
}