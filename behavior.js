function checkIfMobie() {
    if(window.screen.width <= 800){
        document.getElementById("dropdown-button-about").setAttribute("href", "about-mobile.html");
        document.getElementById("dropdown-button-home").setAttribute("href", "index-mobile.html");
        
    }  
}