function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

const burger = document.getElementById('sidebarToggle')
const page = document.getElementById('page')
const body = document.body

burger.addEventListener('click', event => {
	if (body.classList.contains('show-sidebar')) {
		closeSidebar()
	} else {
		showSidebar()
	}
})

function showSidebar() {
	let mask = document.createElement('div')
	mask.classList.add('page__mask')
	mask.addEventListener('click', closeSidebar)
	page.appendChild(mask)
	body.classList.add('show-sidebar')
}

function closeSidebar() {
	body.classList.remove('show-sidebar')
	document.querySelector('.page__mask').remove()
}

const modalBtn = document.querySelectorAll('[data-modal]')
const modal = document.querySelectorAll('.modal')
modalBtn.forEach(item => {
	item.addEventListener('click', event => {
		let $this = event.currentTarget
		let modalId = $this.getAttribute('data-modal')
		let modal = document.getElementById(modalId)
		let modalContent = modal.querySelector('.modal__content')
		modalContent.addEventListener('click', event => {
			event.stopPropagation()
		})
		modal.classList.add('show')
		body.classList.add('no-scroll')
		setTimeout(function () {
			modalContent.style.transform = 'none'
		}, 1)
	})
})

modal.forEach(item => {
	item.addEventListener('click', event => {
		let currentModal = event.currentTarget
		closeModal(currentModal)
	})
})

function closeModal(currentModal) {
	let modalContent = currentModal.querySelector('.modal__content')
	modalContent.removeAttribute('style')
	setTimeout(() => {
		currentModal.classList.remove('show')
		body.classList.remove('no-scroll')
	}, 200)
}



