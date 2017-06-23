document.addEventListener("DOMContentLoaded", function(event) {

	// add mobile dropdown menu behaviors
	var buttonMobileMenu = document.getElementsByClassName("navigation__mobile-switch");

	if (buttonMobileMenu[0]) {
		buttonMobileMenu[0].addEventListener("click", function() {
			document.getElementsByClassName("navigation__mobile-hamburger")[0].classList.toggle("navigation__mobile-switch--open");
			document.getElementsByClassName("navigation")[0].classList.toggle("navigation__mobile--open")
		});
	}

	// add delete button confirmation pop up
	var buttonsDelete = document.getElementsByClassName("-js-buttons--delete");

	if(buttonsDelete.length > 0) {

		for (var i = 0; i < buttonsDelete.length; i++) {
			buttonsDelete[i].addEventListener("submit", function(event) {
				if (!window.confirm("You are about to permanently delete this position and all its contents. Are you sure?")) {
						event.preventDefault();
						return false;
						console.log("Form submission cancelled.")
				}
			});
		}
	}



});



