/*-------------------- active navbar ----------------------*/
let nav = document.querySelector(".header");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 0) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
}

/*-------------------- nav hide ----------------------*/
let navBar = document.querySelectorAll('.navlink');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    });
});

/*-------------------- counter ----------------------*/
let valuedisplay = document.querySelectorAll(".num");
let interval = 5000;
valuedisplay.forEach((valuedisplay) => {
    let startValue = 0;
    let endValue = parseInt(valuedisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valuedisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

/*-------------------- Feature-Brand owl carousel ----------------------*/
jQuery("#carousel").owlCarousel({
    margin: 40,
    responsiveClass: true,
    autoHeight: true,
    nav: true,
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 2
        },

        991: {
            items: 3
        },

        1024: {
            items: 4
        },

        1366: {
            items: 4
        }
    }
});

/*-------------------- About-Page owl carousel ----------------------*/
jQuery("#carousel1").owlCarousel({
    margin: 40,
    responsiveClass: true,
    autoHeight: true,
    nav: true,
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 2
        },

        991: {
            items: 3
        },

        1024: {
            items: 3
        },

        1366: {
            items: 3
        }
    }
});

/*-------------------- our-works owl carousel ----------------------*/
$('.owl-carousel.our-work').owlCarousel({
    stagePadding: 0,
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [
        '<img src="assets/img/pink-arrow-left.png" class="w-75">',
        '<img src="assets/img/pink-arrow.png" class="w-75">'
    ],
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});

/*-------------------- our-works tap-hover effect ----------------------*/
document.querySelectorAll('#myTab a').forEach(function(everyitem){ 	
	
	var tabTrigger = new bootstrap.Tab(everyitem)
	everyitem.addEventListener('mouseenter', function(){
		tabTrigger.show();
	});
	
});
