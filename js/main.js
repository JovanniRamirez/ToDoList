const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('tasklist');
function createCheckbox(id) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = id;
    checkbox.style.marginRight = '4px';
    return checkbox;
}
function addTask() {
    const taskName = taskInput.value;
    if (taskName) {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `task${taskList.children.length + 1}`;
        checkbox.style.marginRight = '4px';
        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = taskName;
        markTaskCompleted(checkbox);
        taskList.appendChild(listItem);
        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        taskInput.value = '';
    }
}
const addButton = document.querySelector('button');
addButton.addEventListener('click', addTask);
const checkboxes = document.querySelectorAll('#tasklist input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    markTaskCompleted(checkbox);
});
function markTaskCompleted(checkbox) {
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
