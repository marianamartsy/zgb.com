const aboutusBox = document.querySelector('.aboutus__box')
const aboutusImg = document.querySelector('.aboutus__img')

window.addEventListener('scroll', function () {
	const aboutusBounding = aboutusBox.getBoundingClientRect()
	if (aboutusBounding.top < window.innerHeight && aboutusBounding.bottom >= 0) {
		aboutusImg.classList.add('animate-appear')
	} else {
		aboutusImg.classList.remove('animate-appear')
	}
})
