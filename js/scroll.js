const aboutusSection = document.getElementById('aboutus')
const aboutusImg = document.querySelector('.aboutus__img')
const heroSection = document.querySelector('.hero-img')
const heroImg = document.querySelector('.hero-img__mobile')

window.addEventListener('scroll', function () {
	const aboutusBounding = aboutusSection.getBoundingClientRect()
	if (aboutusBounding.top < window.innerHeight && aboutusBounding.bottom >= 0) {
		aboutusImg.classList.add('animate-appear')
	} else {
		aboutusImg.classList.remove('animate-appear')
	}
})
window.addEventListener('scroll', function () {
	const heroBounding = heroSection.getBoundingClientRect()
	if (window.innerWidth <= 992) {
		if (heroBounding.top < window.innerHeight && heroBounding.bottom >= 0) {
			heroImg.classList.add('animate-pulse')
		} else {
			heroImg.classList.remove('animate-pulse')
		}
	} else {
		heroImg.classList.remove('animate-pulse')
	}
})
