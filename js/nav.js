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

document.addEventListener('DOMContentLoaded', () => {
	const activeItem = localStorage.getItem('activeMenuItem')

	if (activeItem) {
		menuItems.forEach(item => {
			if (item.textContent.trim() === activeItem) {
				item.classList.add('nav-desktop__item-active')
			}
		})
	}

	menuItems.forEach(item => {
		item.addEventListener('click', () => {
			const content = item.textContent.trim()

			menuItems.forEach(el => el.classList.remove('nav-desktop__item-active'))
			item.classList.add('nav-desktop__item-active')

			localStorage.setItem('activeMenuItem', content)
		})
	})
})
