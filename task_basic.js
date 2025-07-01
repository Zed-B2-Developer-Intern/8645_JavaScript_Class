const tasks = [];

function addTask(name) {
    tasks.push({ id: tasks.length + 1, name, completed: false });
}

function completeTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) task.completed = true;
}

function displayTasks() {
    console.log("Tasks:");
    tasks.forEach(task => {
        console.log(`${task.id}. [${task.completed ? 'X' : ' '}] ${task.name}`);
    });
}

addTask("Learn JavaScript basics");
addTask("Practice coding");
completeTask(1);
displayTasks();