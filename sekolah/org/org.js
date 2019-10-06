function openTeach(n) {
    if (n == 0){
      document.getElementById("gpagi").style.width = "100%";
    }else if(n == 1){
      document.getElementById("gpetang").style.width = "100%";
    }
}
    
function closeTeach() {
    document.getElementById("gpagi").style.width = "0%";
    document.getElementById("gpetang").style.width = "0%";
}