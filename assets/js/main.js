// Task menu animation
const taskMenu = document.querySelectorAll('.task-menu div')
const taskMenuItems = document.querySelectorAll('.task-menu__item');
const taskContainers = document.querySelectorAll('.task-container')

const tasksContainers = document.querySelectorAll('.task-container');

const clickedTabs = [taskMenu[0]];
const activeContainers = [taskContainers[0]];
for (i = 0; i < taskMenuItems.length; i++) {
    const tasksContainersIndex = taskContainers[i];
    taskMenuItems[i].addEventListener('click', function () {

        // Tabs
        this.classList.add('active-tab');
        clickedTabs.unshift(this);
        clickedTabs[1].classList.remove('active-tab');

        // Containers
        tasksContainersIndex.classList.add('active-container');
        activeContainers.unshift(tasksContainersIndex);
        activeContainers[1].classList.remove('active-container');
        activeContainers[1].style.position = 'relative';
        tasksContainersIndex.style.position = 'absolute';
    })
}

// Modal window actions
const openModalWindowButton = document.querySelector('.fa-info');
const modalWindow = document.querySelector('.modal-window');
const closeModalWindowButton = document.querySelector('#close-modal-window__button')

openModalWindowButton.addEventListener('click', function () {
    modalWindow.style.display = 'block';

    setTimeout(() => {
        modalWindow.style.opacity = 100;
    }, 0);
});

closeModalWindowButton.addEventListener('click', function () {
    modalWindow.style.display = 'none';
    modalWindow.style.opacity = 0;
});

// Add task const's
const taskContainer = document.querySelector('.tasks-container');
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

    const taskDeleteIcon = document.createElement('img');

    // Add classes to elements
    task.classList.add('task');
    task.classList.add('in-progress');
    taskOptions.classList.add('task-options');
    iconCheckTaskOptions.classList.add('fas');
    iconCheckTaskOptions.classList.add('fa-check');
    iconCheckTaskOptions.classList.add('check-in-progress');
    iconEyeTaskOptions.classList.add('fas');
    iconEyeTaskOptions.classList.add('fa-eye-slash');
    taskText.classList.add('task__text');
    taskText.textContent = addTaskInput.value;
    taskSettings.classList.add('task-settings');
    taskMoveArrowsContainer.classList.add('task-move-arrows');
    taskSettingsMoveArrowUp.classList.add('fas');
    taskSettingsMoveArrowUp.classList.add('fa-chevron-up');
    taskSettingsMoveArrowDown.classList.add('fas');
    taskSettingsMoveArrowDown.classList.add('fa-chevron-down');
    taskDeleteIcon.classList.add('delete-task__icon');
    taskDeleteIcon.setAttribute('src', 'assets/img/trash.png');

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

    if (themeIcon[1].classList.contains('selected-theme')) {
        taskText.style.color = '#2F2F2F ';
        iconEyeTaskOptions.style.color = '#2F2F2F';
        iconCheckTaskOptions.style.backgroundColor = '#2F2F2F';
        taskMoveArrowsContainer.style.color = '#2F2F2F'
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