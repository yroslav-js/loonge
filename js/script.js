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

var mixer = mixitup('.containermix')

const gallery__link = document.getElementById('gallery__link1')
gallery__link.click()

