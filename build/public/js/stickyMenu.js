function stickyMenu() {
  var stickyMenu = document.querySelector(".sticky-menu"),
      menuTop = stickyMenu.offsetTop; //get the offset top of the element

  window.onscroll = function() { //when window is scrolled
    var currentPos = menuTop - window.pageYOffset,
        stickyMenuHeight = stickyMenu.offsetHeight,
        body = document.getElementsByTagName("BODY")[0],
        windowTop = window.pageYOffset;
    
    if(menuTop - windowTop <= 0){
      stickyMenu.classList.add("sticked");
      body.classList.add('sticked');
      document.getElementById("main-content").style.top = stickyMenuHeight + "px";
    }
    else{
      stickyMenu.classList.remove("sticked");
      body.classList.remove('sticked');
      document.getElementById("main-content").style.top = "0px";
    }
  };
};