class TodoList {
    constructor(taskInputId, taskListId, addButtonId) {
        this.taskInput = document.getElementById(taskInputId);
        this.taskList = document.getElementById(taskListId);
        this.addButton = document.querySelector(addButtonId);
        this.addButton.addEventListener('click', () => this.addTask());
        this.taskInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                this.addTask();
            }
        });
    }
    createCheckbox(id) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = id;
        checkbox.style.marginRight = '4px';
        return checkbox;
    }
    createLabel(forId, text) {
        const label = document.createElement('label');
        label.htmlFor = forId;
        label.textContent = text;
        return label;
    }
    markTaskCompleted(checkbox) {
        checkbox.addEventListener('change', () => {
            const label = checkbox.nextElementSibling;
            if (checkbox.checked) {
                label.style.textDecoration = 'line-through';
            }
            else {
                label.style.textDecoration = 'none';
            }
        });
    }
    addTask() {
        let taskName = this.taskInput.value;
        if (taskName) {
            taskName = taskName.charAt(0).toUpperCase() + taskName.slice(1);
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            const checkboxId = `task${this.taskList.children.length + 1}`;
            const checkbox = this.createCheckbox(checkboxId);
            const label = this.createLabel(checkboxId, taskName);
            this.markTaskCompleted(checkbox);
            this.taskList.appendChild(listItem);
            listItem.appendChild(checkbox);
            listItem.appendChild(label);
            this.taskInput.value = '';
        }
    }
}
const todoList = new TodoList('taskInput', 'tasklist', 'button');
