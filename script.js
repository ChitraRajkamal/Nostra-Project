
//top offerclose
var offerclose = document.getElementById("offer-close")
var offerbar = document.querySelector(".offer-bar")

offerclose.addEventListener("click",function(){
    
     offerbar.style.display="none"
  })

  //side menu bar
  
  var sidemenu = document.getElementById("side-navbar-activate") 
  var sidepopup = document.querySelector(".side-navbar")

  sidemenu.addEventListener("click",function(){
//     sidepopup.style.display = "block"
 sidepopup.style.marginLeft="0px"
  })

  var sidenavclose = document.getElementById("offer-closeicon")

  sidenavclose.addEventListener("click",function(){
    sidepopup.style.marginLeft="-60%"
  })

  

