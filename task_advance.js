const TaskManager = (() => {
    let tasks = [];
    let nextId = 1;

    const createTask = (name) => ({
        id: nextId++,
        name,
        completed: false
    });

    const completeTask = (task) => ({
        ...task,
        completed: true
    });

    const addTask = (name) => {
        const task = createTask(name);
        tasks = [...tasks, task];
        return task;
    };

    const setTaskCompleted = (taskId) => {
        tasks = tasks.map(task => 
            task.id === taskId ? completeTask(task) : task
        );
    };

    const getTasks = () => [...tasks];

    const displayTasks = () => {
        console.log("Tasks:");
        tasks.forEach(task => {
            console.log(`${task.id}. [${task.completed ? 'X' : ' '}] ${task.name}`);
        });
    };

    return {
        addTask,
        setTaskCompleted,
        getTasks,
        displayTasks
    };
})();


TaskManager.addTask("Learn functional programming");
TaskManager.addTask("Implement design patterns");
TaskManager.setTaskCompleted(1);
TaskManager.displayTasks();


const pendingTasks = TaskManager.getTasks().filter(t => !t.completed);
console.log("Pending tasks:", pendingTasks);