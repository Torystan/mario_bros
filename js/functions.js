(function() {
	
	//
	// Global
	//
	
	var body = document.querySelector('body');
	var modal = document.querySelector('#modal');
	var modalBorder = document.querySelector('#modal-border');
	var modalOpen = document.querySelector('#modal-open');
	var modalClose = document.querySelector('#modal-close');
	
	//
	// Méthodes
	//
	
	/**
	 * Ouvre la fenêtre du jeu.
	 *
	 * @returns {undefined}.
	 */
	function startGame() {
		body.classList.add('no-scroll');
		modal.classList.remove('is-hidden');
		modal.classList.add('is-visible');
		keepRatio();
		jeu.init();
	}
	
	/**
	 * Ferme la fenêtre du jeu.
	 *
	 * @returns {undefined}.
	 */
	function endGame() {
		body.classList.remove('no-scroll');
		modal.classList.remove('is-visible');
		modal.classList.add('is-hidden');
		jeu.resetAll();
	}
	
	/**
	 * Permet de définir le ratio de la fenêtre de jeu.
	 *
	 * @returns {undefined}.
	 */
	function setRatio() {
		if (document.body.clientHeight < document.body.clientWidth) {
			modalBorder.classList.add('ratio-y');
		} else {
			modalBorder.classList.add('ratio-x');
		}
	}
	
	/**
	 * Permet de garder le ratio de la fenêtre de jeu.
	 *
	 * @returns {undefined}.
	 */
	function keepRatio() {
		if (document.body.clientHeight < modalBorder.offsetHeight) {
			modalBorder.classList.remove('ratio-x');
			modalBorder.classList.add('ratio-y');
		}
		if (document.body.clientWidth < modalBorder.offsetWidth) {
			modalBorder.classList.remove('ratio-y');
			modalBorder.classList.add('ratio-x');
		}
	}
	
	//
	// Initialisations & écouteurs d'​évènements
	//
	
	modal.classList.add('is-hidden');
	modalOpen.addEventListener('click', startGame.bind(this));
	modalClose.addEventListener('click', endGame.bind(this));
	window.addEventListener('resize', keepRatio.bind(this));
	window.addEventListener('load', setRatio.bind(this));
	
})();
