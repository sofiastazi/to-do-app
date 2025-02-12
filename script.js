const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskItem = document.createElement('li');
        taskItem.classList.add('list-group-item', 'd-flex', 'align-items-center', 'justify-content-between');

        taskItem.innerHTML = `
            <div class="d-flex align-items-center gap-2">
                <input class="form-check-input task-checkbox" type="checkbox">
                <span class="task-text mx-2">${taskText}</span>
            </div>
            <button class="delete-btn btn btn-sm">
                <i class="bi bi-trash text-danger"></i>
            </button>
        `;

        taskList.append(taskItem);
        taskInput.value = "";

        // Add event to the delete button
        const deleteBtn = taskItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', deleteTask);

        // Add event to the checkbox
        const checkbox = taskItem.querySelector('.task-checkbox');
        checkbox.addEventListener('change', toggleTask);
    }
}

function deleteTask(event) {
    const taskItem = event.target.closest('li');
    if (taskItem) {
        taskList.removeChild(taskItem);
    }
}

function toggleTask(event) {
    const taskText = event.target.closest('li').querySelector('.task-text');
    if (event.target.checked) {
        taskText.classList.add('text-decoration-line-through', 'text-secondary');
    } else {
        taskText.classList.remove('text-decoration-line-through', 'text-secondary');
    }
}

// Add event listener to the form
taskForm.addEventListener('submit', addTask);
