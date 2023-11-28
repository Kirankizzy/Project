function addTask() {
    
    var taskInput = document.getElementById("taskInput");

   
    var taskList = document.getElementById("taskList");

    
    var listItem = document.createElement("li");

    
    var taskSpan = document.createElement("span");
    taskSpan.textContent = taskInput.value;

    
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function () {
        listItem.remove();
    };


    listItem.appendChild(taskSpan);
    listItem.appendChild(removeButton);

   
    taskList.appendChild(listItem);

    taskInput.value = "";
}