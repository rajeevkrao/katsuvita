//document.querySelector("#nav-space").style.height = document.querySelector("nav").offsetHeight+"px";

$(function() {
   $('.grid').mousewheel(function(event, delta) {
  		this.scrollLeft -= (delta * 30);
		event.preventDefault();    	
   });
});