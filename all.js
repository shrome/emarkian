let classy = document.getElementsByClassName("image");
let img = document.getElementById("bigImage");
function openImg(n) {
    document.getElementById("myImg").style.height = "100%";
    img.src = "image" + n + ".jpg";
}
function closeImg() {
    document.getElementById("myImg").style.height = "0%";
}
//menu
function bar() {
    document.getElementById("side").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}   
function fin() {
    document.getElementById("side").style.width = "0";
    document.body.style.backgroundColor = "transparent";
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("menu").style.top = "0";
    } else {
      document.getElementById("menu").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}
//opening menu
var acc = document.getElementsByClassName("logo");
var i;
var tag = document.getElementsByTagName("a");
var panel = document.getElementById("menuContainer");
function goToSection(n){
    tag.href = "#image" + n;
}
  
function barOn(n){
    n.classList.toggle("change");
    if (panel.style.height == "calc(100vh - 70px)") {
      panel.style.height = "0";
    }else{
    panel.style.height = "calc(100vh - 70px)";
    }
}
