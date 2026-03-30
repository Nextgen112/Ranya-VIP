// todo-script.js

// Function to add a task
function addTask(task) {
    const tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);
}

// Function to get tasks from local storage
function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

// Function to save tasks to local storage
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to remove a task
function removeTask(task) {
    let tasks = getTasks();
    tasks = tasks.filter(t => t !== task);
    saveTasks(tasks);
}

// Function to clear all tasks
function clearTasks() {
    localStorage.removeItem('tasks');
}