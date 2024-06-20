const nav = document.querySelector('.nav-mobile__items')
const navBtn = document.querySelector('.burger-btn')
const navItems = document.querySelectorAll('.nav-mobile__item')
const menuItems = document.querySelectorAll('.nav-desktop__item')

const navActiveMobile = () => {
	nav.classList.toggle('active')
	navItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('active')
		})
	})
}
navBtn.addEventListener('click', navActiveMobile)

document.addEventListener('DOMContentLoaded', function () {
    const currentLocationPath = window.location.pathname;
    const menuItems = document.querySelectorAll('.nav-desktop__item');
    
    menuItems.forEach(item => {
        const itemPath = new URL(item.href).pathname;
        if (currentLocationPath === itemPath) {
            item.classList.add('nav-desktop__item-active');
        }
    });

    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            menuItems.forEach(function (item) {
                item.classList.remove('nav-desktop__item-active');
            });
            item.classList.add('nav-desktop__item-active');
        });
    });
});

