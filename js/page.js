(function() {
	
	const heart = document.querySelector('#heart');
	const mainPage = document.querySelector('#main');
	const fadeInFirst = document.querySelectorAll('.animated[data-order="1"]');
	const fadeInSecond = document.querySelectorAll('.animated[data-order="2"]');

	console.log(fadeInFirst, fadeInSecond);

	function animationEndHandler (e) {
		if (e.animationName == "scaleToFullSreen") {
			//render main page
			renderMainPage();
		}
	}

	function renderMainPage(e) {
		mainPage.classList.remove("hidden");
		fadeInFirst.forEach(item => item.classList.add('fadeInDown'));
	}

	function renderMainSecond(e) {
		fadeInSecond.forEach(item => {
			item.classList.remove("hidden");
			item.classList.add('fadeInDown');
		});
	}

	heart.addEventListener("animationend", animationEndHandler);
	// fadeInFirst.forEach(item => item.addEventListener("animationend", renderMainSecond));
	renderMainPage();
	setTimeout(renderMainSecond, 500);
})();
