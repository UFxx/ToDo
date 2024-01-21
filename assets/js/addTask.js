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

    // Change task color to match theme color
    if (themeIcon[0].classList.contains('selected-theme')) {
        taskText.style.color = 'white ';
        iconFailedTask.style.color = 'white';
        iconCheckTaskOptions.style.backgroundColor = 'white';
        taskMoveArrowsContainer.style.color = 'white';
        taskDeleteIcon.style.color = 'white';
    } else if (themeIcon[1].classList.contains('selected-theme')) {
        taskText.style.color = '#2F2F2F ';
        iconFailedTask.style.color = '#2F2F2F';
        iconCheckTaskOptions.style.backgroundColor = '#2F2F2F';
        taskMoveArrowsContainer.style.color = '#2F2F2F';
        taskDeleteIcon.style.color = '#2F2F2F';
    } else {
        taskText.style.color = '#2E3442';
        iconFailedTask.style.color = '#2E3442';
        iconCheckTaskOptions.style.backgroundColor = '#2E3442';
        taskMoveArrowsContainer.style.color = '#2E3442';
        taskDeleteIcon.style.color = '#2E3442';
    }
    
    // Extended task
    function toggleExtendedTask(button) {
        if (button === task) {
            button.addEventListener('click', () => {
                extendedTaskContainer.classList.remove('task-extended-hidden');
                const extendedTaskTitle = document.querySelector('.extended-title');
                extendedTaskTitle.textContent = taskText.textContent;


                taskContainer.forEach(element => {
                    element.style.left = '3.5%';
                    element.style.transform = 'translateX(0)';
                });

                taskMenu.style.left = 0;
                newTaskInputContainer.style.left = '3.5%';
                newTaskInputContainer.style.transform = 'translateX(0)';
            })
        } else if (button === closeExtendedTaskContainer) {
            button.addEventListener('click', () => {
                extendedTaskContainer.classList.add('task-extended-hidden');

                taskContainer.forEach(element => {
                    element.style.left = '50%';
                    element.style.transform = 'translateX(-50%)';
                });

                taskMenu.style.left = '32%';
                newTaskInputContainer.style.left = '50%';
                newTaskInputContainer.style.transform = 'translateX(-50%)';
            })
        }
    }
    toggleExtendedTask(task);
    toggleExtendedTask(closeExtendedTaskContainer);

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

    let taskCounter = 0;
    const saveTaskButton = document.querySelector('.fa-save');
    saveTaskButton.addEventListener('click', () => {
        taskCounter++;
        localStorage.setItem(`task${taskCounter}`, JSON.stringify(taskText))
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