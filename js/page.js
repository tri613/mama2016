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
			// hearts.forEach((heart, i) => {
			// 	const x = (Math.floor(Math.random() * 20) - 10) * 20;
			// 	const delay = Math.round(Math.random() * 100) / 100;
			// 	xs.push(x);
			// 	delays.push(delay);
			// 	heart.style.transitionDelay = `${delay}s`;
			// 	heart.style.webkitTransitionDelay = `${delay}s`;
			// 	heart.style.transform = `translate(${x}%, -100vh)`;
			// });
			// console.log(xs, delays);
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
		const content = document.querySelector(`#${this.dataset.author}`);
		content.classList.toggle('hidden');
		content.classList.toggle('open');
	}

	heart.addEventListener("animationstart", flyHearts);
	heart.addEventListener("animationend", animationEndHandler);
	openBtn.forEach(btn => btn.addEventListener('click', toggleContent));
})();
