var MobileNav = document.getElementById("mobile-nav");

MobileNav.onmousemove = function(event){
    MobileNav.style.backgroundPosition = event.clientX/40 + "px " + event.clientY/40 + "px ";
}

var bars = document.getElementById("button-bars");
var body = document.getElementsByTagName("body")[0];
var rememberY = 0;

MobileNav.onclick = function(){
    MobileNav.style.display = "none";
    body.style.height = "auto";
    body.style.overflow = "scroll";
    window.scrollTo(0,rememberY - 5);
}

bars.onclick = function(event){
    rememberY = event.pageY;

    MobileNav.style.display = "flex";
    body.style.height = "100vh";
    body.style.overflow = "hidden";
    window.scrollTo(0,0);
}