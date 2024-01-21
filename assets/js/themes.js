// Select theme
const themeIcon = document.querySelectorAll('.themes i');
const selectedThemes = [themeIcon[0]];

for (i = 0; i < themeIcon.length; i++) {
    const themeIconIndex = themeIcon[i]
    themeIconIndex.addEventListener('click', () => {
        themeIconIndex.classList.add('selected-theme');
        selectedThemes.push(themeIconIndex);
        selectedThemes[0].classList.remove('selected-theme');
        selectedThemes.shift();
    })
}

// Const for change color
const body = document.querySelector('body');
const infoButton = document.querySelector('.fa-info');
const tasksContainer = document.querySelectorAll('.tasks-container');
const task = document.querySelector('.tasks-contaner .task');
const taskInput = document.querySelector('#add-task__input');
const taskInputButton = document.querySelector('#add-task__button');
const taskMenuIcons = document.querySelectorAll('.task-menu i');
const logo = document.querySelector('.menu-items img');
const taskCheckIcon = document.querySelector('.fa-check');
const instruction = document.querySelector('.instruction');
const activeContainer = document.querySelector('.active-container');
const extendedtask = document.querySelector('.task-extended');

// Change colors
const themes = document.querySelector('.themes');

themeIcon[0].addEventListener('click', () => {
    themes.style.border = '2px solid black';
    body.style.background = '#FFC24B';
    infoButton.style.color = 'black';
    taskInput.style.backgroundColor = 'white';
    taskInput.style.color = '#959595';
    taskInputButton.style.backgroundColor = 'white';
    taskInputButton.style.color = 'black';
    extendedtask.style.backgroundColor = 'white';
    for (i = 0; i < taskMenuIcons.length; i++) {
        taskMenuIcons[i].style.color = 'white';
    }

    taskContainers.forEach(el => {
        el.style.backgroundColor = 'white'
    });
    
    logo.setAttribute('src', 'assets/img/orange-theme-logo.svg');
    instruction.style.backgroundColor = 'white';
    instruction.style.color = 'black';
})

themeIcon[1].addEventListener('click', () => {
    const tasksOptions = document.querySelectorAll('.task > div i');

    tasksOptions.forEach(el => {
        el.style.color = '#2F2F2F'
    })

    themes.style.border = '2px solid white';
    body.style.background = '#171717';
    infoButton.style.color = 'white';
    taskInput.style.backgroundColor = '#2F2F2F';
    taskInput.style.color = '#959595';
    taskInputButton.style.backgroundColor = '#2F2F2F';
    taskInputButton.style.color = 'black';
    extendedtask.style.backgroundColor = '#2F2F2F';
    for (i = 0; i < taskMenuIcons.length; i++) {
        taskMenuIcons[i].style.color = '#262626';
    }

    taskContainers.forEach(el => {
        el.style.backgroundColor = '#2F2F2F'
    });

    logo.setAttribute('src', 'assets/img/black-theme-logo.svg');
    instruction.style.backgroundColor = 'black';
    instruction.style.color = 'white';
})

themeIcon[2].addEventListener('click', () => {
    themes.style.border = '2px solid white';
    body.style.background = '#1D212A';
    infoButton.style.color = '#92BABC';
    taskInput.style.backgroundColor = '#2E3442';
    taskInput.style.color = '#4A5567';
    taskInputButton.style.backgroundColor = '#2E3442';
    taskInputButton.style.color = '#D4D7DF';
    extendedtask.style.backgroundColor = '#2E3442';
    for (i = 0; i < taskMenuIcons.length; i++) {
        taskMenuIcons[i].style.color = '#2E3442';
    }

    taskContainers.forEach(el => {
        el.style.backgroundColor = '#2E3442'
    });

    instruction.style.backgroundColor = '#2E3442';
    instruction.style.color = 'white';
    logo.setAttribute('src', 'assets/img/nord-theme-logo.svg');
})