function dark() {

    var element = document.body;
    element.classList.toggle("dark-mode");
   

    var image = document.getElementById("light");
    if (image.src.match("dark.png")) {
        image.src = "./images/light.png";
    }
    else {
        image.src = "./images/dark.png";
    }
    var logos = document.getElementById("dLogo");
    var bg11=document.getElementById("Bg11");
    var navbar=document.getElementById("navbar");
    var navlink=document.getElementsByClassName("nav-link");
    for(let i=0;i<navlink.length;i++){
        navlink[i].style.color='white';
   }
   
        
    if (image.src.match("dark.png")) {
        logos.src = "./images/darklogo.png";
        bg11.style.backgroundColor='#3c444b';
        navbar.style.backgroundColor='black';
        navlink[i].style.color='white';
        
    }
    else{
        bg11.style.backgroundColor='#e9ebee'
        logos.src = "./images/metamask.png";
        navbar.style.backgroundColor='white';
        for(let i=0;i<navlink.length;i++){
            navlink[i].style.color='black';
       }
       
    }
}



