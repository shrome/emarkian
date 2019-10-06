let a = document.getElementById("pen");
let b =document.getElementById("pss");
let c =document.getElementById("majpel");
var array = [a , b , c];
function openNav(n) {
  array[n].style.width = "100%";
}
function closeNav(){
  document.getElementById("pen").style.width = "0%";
  document.getElementById("pss").style.width = "0%";
  document.getElementById("majpel").style.width = "0%";
}
