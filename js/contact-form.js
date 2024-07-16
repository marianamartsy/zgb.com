const contactForm = document.getElementById('contactForm')
const fullNameInput = document.getElementById('full-name')
const telephoneInput = document.getElementById('telephone')
const emailInput = document.getElementById('email-address')
const messageInput = document.getElementById('message')

function handleSubmitForm(e) {
	e.preventDefault()

	const formData = {
		name: fullNameInput.value,
		telephone: telephoneInput.value,
		email: emailInput.value,
		message: messageInput.value,
	}

	fetch('https://zgb-back-227caenyw-marianamartsys-projects.vercel.app/api/contact', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formData),
	})
		.then(response => response.json())
		.then(data => {
			if (data.success) {
				alert('Wiadomość została wysłana!')
				contactForm.reset()
			} else {
				alert('Wystąpił błąd. Spróbuj ponownie.')
			}
		})
		.catch(error => {
			console.error('Error:', error)
			alert('Wystąpił błąd. Spróbuj ponownie.')
		})
}

contactForm.addEventListener('submit', handleSubmitForm)
