function openNav(n) {
    if (n == 0) {
      document.getElementById("pen").style.width = "100%";
    }
    else if (n == 1) {
      document.getElementById("pss").style.width = "100%";
    }
    else if (n == 2) {
      document.getElementById("majpel").style.width = "100%";
    }
  }
  function closeNav(){
    document.getElementById("pen").style.width = "0%";
    document.getElementById("pss").style.width = "0%";
    document.getElementById("majpel").style.width = "0%";
  }
  