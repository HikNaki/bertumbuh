const bar = document.getElementById('menu');
const navMenu = document.getElementById('nav-menu');

bar.addEventListener('click', () => {
    bar.name = bar.name === 'menu' ? 'close' : 'menu';
    navMenu.classList.toggle('hidden');
});
