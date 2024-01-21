// Add task consts
const taskContainer = document.querySelectorAll('.task-container');
const addTaskInput = document.querySelector('#add-task__input');

const taskMenu = document.querySelector('.task-menu');
const newTaskInputContainer = document.querySelector('.input-new-task');

// Input button animation && add new task
const addTaskButton = document.querySelector('#add-task__button');
const addTaskButtonArrow = document.querySelector('#add-task__button i');

// Tasks containers
const doneContainer = document.querySelector('.task-container-done');
const failedContainer = document.querySelector('.task-container-failed');
const inProgressContainer = document.querySelector('.task-container-in-progress');

// Extended task consts
const extendedTaskContainer = document.querySelector('.task-extended');
const closeExtendedTaskContainer = document.querySelector('.task-extended-close');

// Add task func
function addTask() {
    addTaskButton.style.transform = 'scale(1.1)';
    addTaskButtonArrow.style.animation = 'arrow-cycle 1s';

    setTimeout(() => {
        addTaskButton.style.transform = 'scale(1)';
    }, 300);

    setTimeout(() => {
        addTaskButtonArrow.style.animation = '';
    }, 1000);

    // Add a task
    // Create elements
    const task = document.createElement('div');
    const taskOptions = document.createElement('div');
    const iconCheckTaskOptions = document.createElement('i');
    const iconFailedTask = document.createElement('i');
    const taskText = document.createElement('p');
    const taskSettings = document.createElement('div');
    const taskMoveArrowsContainer = document.createElement('div');
    const taskSettingsMoveArrowUp = document.createElement('i');
    const taskSettingsMoveArrowDown = document.createElement('i');
    const taskDeleteIcon = document.createElement('i');

    // Add classes to elements
    task.classList.add('task', 'in-progress');
    taskOptions.classList.add('task-options');
    iconCheckTaskOptions.classList.add('fas', 'fa-check', 'check-in-progress');
    iconFailedTask.classList.add('fas', 'fa-times');
    taskText.classList.add('task__text');
    taskText.textContent = addTaskInput.value;
    taskSettings.classList.add('task-settings');
    taskMoveArrowsContainer.classList.add('task-move-arrows');
    taskSettingsMoveArrowUp.classList.add('fas', 'fa-chevron-up');
    taskSettingsMoveArrowDown.classList.add('fas', 'fa-chevron-down');
    taskDeleteIcon.classList.add('fas', 'fa-trash');

    // Append elements
    inProgressContainer.appendChild(task);
    task.appendChild(taskOptions);
    taskOptions.appendChild(iconCheckTaskOptions);
    taskOptions.appendChild(iconFailedTask);
    taskOptions.appendChild(taskText);
    task.append(taskSettings);
    taskSettings.appendChild(taskMoveArrowsContainer);
    taskMoveArrowsContainer.appendChild(taskSettingsMoveArrowUp);
    taskMoveArrowsContainer.appendChild(taskSettingsMoveArrowDown);
    taskSettings.appendChild(taskDeleteIcon)
    addTaskInput.value = '';

    // Move task to done container
    iconCheckTaskOptions.addEventListener('click', () => {

        const iconParent = iconCheckTaskOptions.parentElement.parentElement;
        const getTaskStatus = iconParent.classList[1];
        doneContainer.appendChild(iconCheckTaskOptions.parentElement.parentElement);
        iconParent.classList.remove(getTaskStatus);
        iconParent.classList.add('done');
    })

    // Move task to failed container
    iconFailedTask.addEventListener('click', () => {
        const iconParent = iconFailedTask.parentElement.parentElement;
        const getTaskStatus = iconParent.classList[1];
        failedContainer.appendChild(iconCheckTaskOptions.parentElement.parentElement);
        iconParent.classList.remove(getTaskStatus);
        iconParent.classList.add('failed');
    })

    // Delete task
    taskDeleteIcon.addEventListener('click', function () {
        task.style.animation = 'delete-task .4s';

        setTimeout(() => {
            task.style.display = 'none';
        }, 400)
    });

    setTimeout(() => {
        addTaskButton.setAttribute('disabled', '')
    }, 0)

}

// Add task by click button
addTaskButton.addEventListener('click', addTask, function () {
    addTask();
});

// Add task by click enter
addTaskInput.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        addTask();
    }
});

addTaskInput.addEventListener('input', function () {
    if (addTaskInput.value !== '') {
        addTaskButton.removeAttribute('disabled', '')
    }
});