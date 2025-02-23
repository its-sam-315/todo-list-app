function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") return;

    let listItem = document.createElement("li");
    listItem.textContent = taskInput.value;

    listItem.onclick = function() {
        taskList.removeChild(listItem);
    };

    taskList.appendChild(listItem);
    taskInput.value = "";
}
