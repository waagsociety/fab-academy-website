function srollAnimate() {
  window.onscroll = function() { //when window is scrolled
    var windowTop = window.pageYOffset,
        hero = document.getElementsByClassName('hero')[0],
        heroTop = hero.offsetTop;
    
//    window.heroTop = heroTop;
//    
//    console.log(typeof heroTop, heroTop, +heroTop);
//        
    if(windowTop > 100){
      console.log(heroTop);
      hero.classList.add("scrolled");
      hero.style.top = windowTop + heroTop + "px"
    }
    else{
      hero.classList.remove("scrolled"); 
    }
  }
};