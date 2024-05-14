const nav = document.querySelector('.nav-mobile__items')
const navBtn = document.querySelector('.burger-btn')
const navItems = document.querySelectorAll('.nav-mobile__item')
const menuItems = document.querySelectorAll('.nav-desktop__item')

const navActive = () => {
	nav.classList.toggle('active')
	navItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('active')
		})
	})

	handleNavItemsAnimation()
}

menuItems.forEach(function (item) {
	item.addEventListener('click', function () {
		menuItems.forEach(function (item) {
			item.classList.remove('nav-desktop__item-active')
		})
		item.classList.add('nav-desktop__item-active')
	})
})

navBtn.addEventListener('click', navActive)
