function slideMenu(){  
  var hamburgerBtn = document.querySelector(".hamburger-menu"),
  		content = document.getElementById("main-content"),
  		body = document.getElementsByTagName("BODY")[0],
      slideMenu = document.querySelector(".slide-menu");
  
  hamburgerBtn.onclick = function(){
		this.classList.toggle('open');
		slideMenu.classList.toggle('open');
		body.classList.toggle('noScroll');
		// content.classList.toggle('open');
	};
};
window.onresize=function(){
  slideMenu();
}
slideMenu();