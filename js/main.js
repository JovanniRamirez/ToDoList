const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('tasklist');
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
        label.textContent = " " + taskName;
        taskList.appendChild(listItem);
        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        taskInput.value = '';
    }
}
const addButton = document.querySelector('button');
addButton.addEventListener('click', addTask);
