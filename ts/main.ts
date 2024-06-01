
// Get references to the input field and task list
const taskInput = document.getElementById('taskInput') as HTMLInputElement;
const taskList = document.getElementById('tasklist') as HTMLUListElement;

/**
 * Function to create a new checkbox using id parameter
 * @param id Used to populate the id of the checkbox in the html file
 * @returns Returns the checkbox element as a variable ready to be output to the html page
 */
function createCheckbox(id: string):HTMLInputElement {
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
function createLabel(forId: string, text:string):HTMLLabelElement {
    const label = document.createElement('label');
    label.htmlFor = forId;
    label.textContent = text;
    return label;
}

/**
 * Function to add a new task, use createLabel and createCheckbox to create a new task
 * and populate the html with a new row of task information. Grab the input from the input text box
 * and make the checkbox cross out the label text if the box is checked.
 */
function addTask() {
    let taskName = taskInput.value;

    if (taskName) {
        // Capitalize the first letter of the task name
        taskName = taskName.charAt(0).toUpperCase() + taskName.slice(1);

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';

        //Create a checkbox and label

        const checkboxId = `task${taskList.children.length + 1}`;
        const checkbox = createCheckbox(checkboxId);
        const label = createLabel(checkboxId, taskName);

        markTaskCompleted(checkbox);

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

// Function to mark a task as completed
function markTaskCompleted(checkbox: HTMLInputElement) {
    checkbox.addEventListener('change', () => {
        //Get the label that immediately follows the checkbox
        const label = checkbox.nextElementSibling as HTMLLabelElement;
        if (checkbox.checked) {
            label.style.textDecoration = 'line-through'; //Mark as completed line through
        }
        else {
            label.style.textDecoration = 'none';
        }
    })
}

// Assuming each checkbox is within the 'tasklist' ul element
const checkboxes = document.querySelectorAll<HTMLInputElement>('#tasklist input[type="checkbox"]') ;

// Attach event listener to all checkboxes
checkboxes.forEach(checkbox => {
    markTaskCompleted(checkbox);
});

// Add event listener for the enter key
taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addTask();
    }
});