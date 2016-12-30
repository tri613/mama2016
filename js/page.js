(function() {
	
	const heart = document.querySelector('#heart');
	const mainPage = document.querySelector('#main');
	const fadeInElement = document.querySelectorAll('.show-on-main');

	function animationEndHandler (e) {
		if (e.animationName == "scaleToFullSreen") {
			//render main page
			renderMainPage();
		}
	}

	function renderMainPage() {
		mainPage.classList.remove("hidden");
		fadeInElement.forEach(item => item.classList.add('fadeInDown'));
	}

	heart.addEventListener("animationend", animationEndHandler);
	renderMainPage();
})();
