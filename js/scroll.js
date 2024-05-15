window.addEventListener('scroll', function () {
	const aboutusSection = document.getElementById('aboutus')
	const aboutusBounding = aboutusSection.getBoundingClientRect()
	const aboutusImg = document.querySelector('.aboutus__img')

	if (aboutusBounding.top < window.innerHeight && aboutusBounding.bottom >= 0) {
		aboutusImg.classList.add('animate-appear')
	} else {
		aboutusImg.classList.remove('animate-appear')
	}

	const heroSection = document.querySelector('.hero-img')
	const heroBounding = heroSection.getBoundingClientRect()
	const scrollPosition = window.scrollY
	if (window.innerWidth <= 992) {
		if (heroBounding.top < window.innerHeight && heroBounding.bottom >= 0) {
			const parallaxValue = scrollPosition * 0.4
			heroSection.style.backgroundPositionY = `calc(80% + ${parallaxValue}px)`
		}
	} else {
		heroSection.style.backgroundPositionY = '50%'
	}
})
