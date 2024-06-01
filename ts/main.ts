
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

// Function to add a new task
function addTask() {
    const taskName = taskInput.value;

    if (taskName) {
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


// Assuming each checkbox is within the 'tasklist' ul element
const checkboxes = document.querySelectorAll('#tasklist input[type="checkbox"]') as NodeListOf<HTMLInputElement>;

// Attach event listener to all checkboxes
checkboxes.forEach(checkbox => {
    markTaskCompleted(checkbox);
});

function markTaskCompleted(checkbox: HTMLInputElement) {
    checkbox.addEventListener('change', () => {
        // Get the label that immediately follows the checkbox
        const label = checkbox.nextElementSibling as HTMLLabelElement;
        if (checkbox.checked) {
            label.style.textDecoration = 'line-through'; // Mark as completed
        } else {
            label.style.textDecoration = 'none';
        }
    });
}
