//  Responsive Nav

function openSlideMenu(){
  document.getElementById('side-menu').style.width = '250px';
  // document.getElementById('main').style.marginLeft = '250px';
}

function closeSlideMenu(){
  document.getElementById('side-menu').style.width = '0';
  // document.getElementById('main').style.marginLeft = '0';
}

// scroll reveal

// logo
//logo-img
//ScrollReveal().reveal('#logo-img', { delay: 1000,  duration: 1000, origin: 'bottom', scale: 2 }); 


// crew
ScrollReveal().reveal('.box', { delay: 0, duration: 2000, origin: 'bottom', distance: '300%',});



// Smooth Scrolling
$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
		  $('html, body').animate({
			scrollTop: target.offset().top
		  }, 1000);
		  return false;
		}
	  }
	});
});