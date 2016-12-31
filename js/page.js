(function() {
	
	const heart = document.querySelector('#heart');
	const mainPage = document.querySelector('#main');
	const fadeInFirst = document.querySelectorAll('.animated[data-order="1"]');
	const fadeInSecond = document.querySelectorAll('.animated[data-order="2"]');
	const openBtn = document.querySelectorAll('.open-btn');
	const hearts = document.querySelectorAll('.sm-heart');

	function flyHearts(e) {
		let xs = [];
		let delays = [];
		if (e.animationName == "showHeart") {
			hearts.forEach(heart =>  heart.classList.add('active'));
		}
	}

	function animationEndHandler (e) {
		if (e.animationName == "fadeOutHeart") {
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
		const hash = `#${this.dataset.author}`;
		const content = document.querySelector(hash);
		this.classList.toggle('active');
		content.classList.toggle('open');
	    scrollTo(hash);
	}

	heart.addEventListener("animationstart", flyHearts);
	heart.addEventListener("animationend", animationEndHandler);
	openBtn.forEach(btn => btn.addEventListener('click', toggleContent));
})();
