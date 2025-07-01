class Task {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.completed = false;
    }

    complete() {
        this.completed = true;
    }

    toString() {
        return `${this.id}. [${this.completed ? 'X' : ' '}] ${this.name}`;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }

    addTask(name) {
        const task = new Task(this.nextId++, name);
        this.tasks.push(task);
        return task;
    }

    completeTask(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) task.complete();
    }

    displayTasks() {
        console.log("Tasks:");
        this.tasks.forEach(task => console.log(task.toString()));
    }
}


const manager = new TaskManager();
manager.addTask("Learn JavaScript");
manager.addTask("Build a project");
manager.completeTask(1);
manager.displayTasks();