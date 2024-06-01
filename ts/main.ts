class TodoList {
    private taskInput: HTMLInputElement;
    private taskList: HTMLUListElement;
    private addButton: HTMLButtonElement;

    constructor(taskInputId: string, taskListId: string, addButtonId: string) {
        this.taskInput = document.getElementById(taskInputId) as HTMLInputElement;
        this.taskList = document.getElementById(taskListId) as HTMLUListElement;
        this.addButton = document.querySelector(addButtonId);

        this.addButton.addEventListener('click', () => this.addTask());

        this.taskInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                this.addTask();
            }
        })
    }

    /**
     * Function to create a new checkbox using id parameter
     * @param id Used to populate the id of the checkbox in the html file
     * @returns Returns the checkbox element as a variable ready to be output to the html page
     */
    private createCheckbox(id: string): HTMLInputElement {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = id; //the id parameter goes here
        checkbox.style.marginRight = '4px';
        return checkbox;
    }

    /**
     * Function to create a new label
     * @param forId Copies the checkbox id for the for='' id section of the label element
     * @param text grabs the input of the task name and sets in into the label text section
     * @returns Return the built label element with provided parameters
     */
    private createLabel(forId: string, text: string): HTMLLabelElement {
        const label = document.createElement('label');
        label.htmlFor = forId;
        label.textContent = text;
        return label;
    }

    /**
     * Function to mark a task as completed
     * @param checkbox element that was created entered to line through text when checkbox checked
     */
    private markTaskCompleted(checkbox: HTMLInputElement) {
        checkbox.addEventListener('change', () => {
            // Get the label that immediately follows the checkbox
            const label = checkbox.nextElementSibling as HTMLLabelElement;
            if (checkbox.checked) {
                label.style.textDecoration = 'line-through'; //Mark as completed line through
            }
            else {
                label.style.textDecoration = 'none';
            }
        })
    }

    /**
     * Function to add a new task, use createLabel and createCheckbox to create a new task
     * and populate the html with a new row of task information. Grab the input from the input text box
     * and make the checkbox cross out the label text if the box is checked.
     */
    addTask() {
        let taskName = this.taskInput.value;

        if (taskName) {
            // Capitalize the first letter of the task name
            taskName = taskName.charAt(0).toUpperCase() + taskName.slice(1);

            // Create a new list item
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';

            // Create a checkbox and label
            const checkboxId = `task${this.taskList.children.length + 1}`;
            const checkbox = this.createCheckbox(checkboxId);
            const label = this.createLabel(checkboxId, taskName);

            this.markTaskCompleted(checkbox);

            // Append the new list item to the existing task list
            this.taskList.appendChild(listItem);

            // Append checkbox and label to the list item
            listItem.appendChild(checkbox);
            listItem.appendChild(label);



            // Clear the input field
            this.taskInput.value = '';
        }
    }
}

// Create a new TodoList
const todoList = new TodoList('taskInput', 'tasklist', 'button');