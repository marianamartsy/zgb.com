const fixedImg = document.querySelectorAll('.fixed-img')

function isMobile() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

function isSafariMobile() {
	return /Safari/i.test(navigator.userAgent) && /iPhone|iPad|iPod/i.test(navigator.userAgent)
}

if (isMobile() && isSafariMobile()) {
	fixedImg.forEach(element => {
		element.style.backgroundAttachment = 'scroll'
	})
} else {
	fixedImg.forEach(element => {
		element.style.backgroundAttachment = 'fixed'
	})
}
