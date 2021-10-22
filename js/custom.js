// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/tm-bg-slide-1.jpg", 
	 		 "images/tm-bg-slide-2.jpg",
			 "images/tm-bg-slide-3.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})

var slideIndex = 1;
showSlides(slideIndex);

var slideIndex_exp = 1;
showSlides_exp(slideIndex_exp);


var slideIndex_pap = 1;
showSlides_pap(slideIndex_pap);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function plusSlides_exp(n) {
  showSlides_exp(slideIndex_exp += n);
}

function plusSlides_pap(n) {
  showSlides_pap(slideIndex_pap += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function currentSlide_exp(n) {
  showSlides_exp(slideIndex_exp = n);
}
function currentSlide_pap(n) {
  showSlides_pap(slideIndex_pap = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function showSlides_exp(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-exp");
  var dots = document.getElementsByClassName("dot-exp");
  if (n > slides.length) {slideIndex_exp = 1}
  if (n < 1) {slideIndex_exp = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_exp-1].style.display = "block";
  dots[slideIndex_exp-1].className += " active";
}

function showSlides_pap(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-pap");
  var dots = document.getElementsByClassName("dot-pap");
  if (n > slides.length) {slideIndex_pap = 1}
  if (n < 1) {slideIndex_pap = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_pap-1].style.display = "block";
  dots[slideIndex_pap-1].className += " active";
}
