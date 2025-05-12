// Array of background images
const homeBackgrounds = [
    '../images/homes.jpeg', // Replace with your first image path
    '../images/classes2.jpg', // Replace with your second image path
    /*'../images/learner2.jpg'  // Replace with your third image path*/
];

let currentBackgroundIndex = 0; // Track the current image index
const homeSection = document.querySelector('.home'); // Select the home section

// Function to change the background image
function changeBackground() {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % homeBackgrounds.length; // Cycle through images
    homeSection.style.backgroundImage = `url('${homeBackgrounds[currentBackgroundIndex]}')`;
}

// Change the background every 5 seconds
setInterval(changeBackground, 5000);


let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
	navbar.classList.toggle('active');
	loginForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
	loginForm.classList.toggle('active');
	navbar.classList.remove('active');
}

window.onscroll = () => {
	navbar.classList.remove('active');
	loginForm.classList.remove('active');
}

var swiper = new Swiper('.review-slider', {
	spaceBetween: 20,
	centeredSliders: true,
	grabCursor: true,
	autoplay: {
		delay: 7500,
		disableOnInteraction: false,
	},
	loop: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},

		768: {
			slidesPerView: 2,
		},
		
		991: {
			slidesPerView: 3
		}
	}
})

