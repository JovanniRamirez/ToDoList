// app.ts

// Get references to the input field and task list
const taskInput = document.getElementById('taskInput') as HTMLInputElement;
const taskList = document.getElementById('tasklist') as HTMLUListElement;

// Function to add a new task
function addTask() {
    const taskName = taskInput.value;

    if (taskName) {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';

        // Create a checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `task${taskList.children.length + 1}`;
        checkbox.style.marginRight = '4px';

        // Create a label for the task
        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = " " + taskName;

        // Append the new list item to the existing task list
        taskList.appendChild(listItem);

        // Append checkbox and label to the list item
        listItem.appendChild(checkbox);
        listItem.appendChild(label);

        

        // Clear the input field
        taskInput.value = '';
    }
}

// Attach the addTask function to the button click event
const addButton = document.querySelector('button');
addButton.addEventListener('click', addTask);
