$(document).ready(function () {

	// Sticky manu 

	$(".js-section").waypoint(function (direction) {
		if (direction == "down") {
			$("nav").addClass("sticky");
		} else {
			$("nav").removeClass("sticky");
		}
	});
	//Active Link

	$("nav ul li a").click(function () {
		$("nav ul li a").removeClass("active");
		$(this).addClass("active");
	});

	// SMOOTH SCROLL

	$("a").on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var alink = this.hash;

			$('html, body').animate({
				scrollTop: $(alink).offset().top
			}, 800, function () {
				window.location.hash = alink;
			})
		}

	});

	// (protfo)
	var mixer = mixitup('.container');
});

// MOBILE MENU

function openNav() {
	document.getElementById("myNav").style.width = "100%";
};

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
};
