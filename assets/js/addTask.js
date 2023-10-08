
// Add task const's
const taskContainer = document.querySelector('.task-container-in-progress');
const addTaskInput = document.querySelector('#add-task__input');

// Input button animation && add new task
const addTaskButton = document.querySelector('#add-task__button');
const addTaskButtonArrow = document.querySelector('#add-task__button i');


// Add task func
function addTask () {
    this.style.transform = 'scale(1.1)';
    addTaskButtonArrow.style.animation = 'arrow-cycle 1s'

    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 300);

    setTimeout(() => {
        addTaskButtonArrow.style.animation = '';
    }, 1000);

    // Add a task
    // Create elements
    const task = document.createElement('div');
    const taskOptions = document.createElement('div');
    const iconCheckTaskOptions = document.createElement('i');
    const iconEyeTaskOptions = document.createElement('i');
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
    iconEyeTaskOptions.classList.add('fas', 'fa-eye-slash');
    taskText.classList.add('task__text');
    taskText.textContent = addTaskInput.value;
    taskSettings.classList.add('task-settings');
    taskMoveArrowsContainer.classList.add('task-move-arrows');
    taskSettingsMoveArrowUp.classList.add('fas', 'fa-chevron-up');
    taskSettingsMoveArrowDown.classList.add('fas', 'fa-chevron-down');
    taskDeleteIcon.classList.add('fas', 'fa-trash');


    // Append elements
    taskContainer.appendChild(task);
    task.appendChild(taskOptions);
    taskOptions.appendChild(iconCheckTaskOptions);
    taskOptions.appendChild(iconEyeTaskOptions);
    taskOptions.appendChild(taskText);
    task.append(taskSettings);
    taskSettings.appendChild(taskMoveArrowsContainer);
    taskMoveArrowsContainer.appendChild(taskSettingsMoveArrowUp);
    taskMoveArrowsContainer.appendChild(taskSettingsMoveArrowDown);
    taskSettings.appendChild(taskDeleteIcon)
    addTaskInput.value = '';

    if (themeIcon[0].classList.contains('selected-theme')) {
        taskText.style.color = 'white ';
        iconEyeTaskOptions.style.color = 'white';
        iconCheckTaskOptions.style.backgroundColor = 'white';
        taskMoveArrowsContainer.style.color = 'white';
    } else if (themeIcon[1].classList.contains('selected-theme')) {
        taskText.style.color = '#2F2F2F ';
        iconEyeTaskOptions.style.color = '#2F2F2F';
        iconCheckTaskOptions.style.backgroundColor = '#2F2F2F';
        taskMoveArrowsContainer.style.color = '#2F2F2F';
    } else {
        taskText.style.color = '#2E3442';
        iconEyeTaskOptions.style.color = '#2E3442';
        iconCheckTaskOptions.style.backgroundColor = '#2E3442';
        taskMoveArrowsContainer.style.color = '#2E3442';
    }

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
    addTask();

    for (i = 0; i < selectedThemes.length; i++) {
        if (selectedThemes[1].classList.contains('selected-theme')) {
            task.style.color = '#2F2F2F'
        };
    }
}

addTaskButton.addEventListener('click', addTask, function () {
    addTask();
});

addTaskInput.addEventListener('input', function () {
    if (addTaskInput.value !== '') {
        addTaskButton.removeAttribute('disabled', '')
    }
});