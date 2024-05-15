window.addEventListener('scroll', function () {
	const aboutusSection = document.getElementById('aboutus')
	const aboutusBounding = aboutusSection.getBoundingClientRect()
	const aboutusImg = document.querySelector('.aboutus__img')

	if (aboutusBounding.top < window.innerHeight && aboutusBounding.bottom >= 0) {
		aboutusImg.classList.add('animate-appear')
	} else {
		aboutusImg.classList.remove('animate-appear')
	}
})
