$(document).ready(function(){
	$(".menu-link").click(function(){
		$(".dropdown-hamburger-menu").slideToggle("slow");
		$(this).toggleClass("open");
	});
});