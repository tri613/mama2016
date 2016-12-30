(function() {
	
	const heart = document.querySelector('#heart');
	const mainPage = document.querySelector('#main');
	const fadeInFirst = document.querySelectorAll('.animated[data-order="1"]');
	const fadeInSecond = document.querySelectorAll('.animated[data-order="2"]');
	const openBtn = document.querySelectorAll('.open-btn');

	function animationEndHandler (e) {
		if (e.animationName == "scaleToFullSreen") {
			renderMainPage();
			setTimeout(renderMainSecond, 500);
		}
	}

	function renderMainPage(e) {
		mainPage.classList.remove("hidden");
		fadeInFirst.forEach(item => { 
			item.classList.remove("hidden"); 
			item.classList.add("fadeInDown"); 
		});
	}

	function renderMainSecond(e) {
		fadeInSecond.forEach(item => {
			item.classList.remove("hidden");
			item.classList.add("fadeInDown");
		});
	}

	function toggleContent(e) {
		const content = document.querySelector(`#${this.dataset.author}`);
		content.classList.toggle('hidden');
		content.classList.toggle('open');
	}

	heart.addEventListener("animationend", animationEndHandler);
	openBtn.forEach(btn => btn.addEventListener('click', toggleContent));
})();
