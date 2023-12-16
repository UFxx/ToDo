// Task menu animation
const taskMenu = document.querySelectorAll('.task-menu div')
const taskMenuItems = document.querySelectorAll('.task-menu__item');
const taskContainers = document.querySelectorAll('.task-container');

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
        if (tasksContainersIndex === taskContainers[4]) {
            return
        }
        
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