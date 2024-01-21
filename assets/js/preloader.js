const preloader = document.querySelector('#preloader');
window.addEventListener('load', () => {
    preloader.style.display = 'block';

    setTimeout(() =>{
        preloader.style.opacity = '0';
    }, 3000)

    setTimeout(() =>{
        preloader.style.display = 'none';
    }, 3300)
})