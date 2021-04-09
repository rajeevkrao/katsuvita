//document.querySelector("#nav-space").style.height = document.querySelector("nav").offsetHeight+"px";

$(function() {
   $('.scroll').mousewheel(function(event, delta) {
  		this.scrollLeft -= (delta * 30);
		event.preventDefault();    	
   });
});