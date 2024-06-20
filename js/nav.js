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
	const currentLocation = location.href;

	console.log('Current location:', currentLocation);
	console.log('Menu items:', menuItems);
 
	menuItems.forEach(item => {
	   console.log('Checking item:', item.href);
	   if (item.href === currentLocation) {
		  item.classList.add('nav-desktop__item-active');
		  console.log('Added active class to:', item.href);
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
 
