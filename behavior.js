function detectMob() {
    var isMobile = false;
    if(window.innerWidth <= 800 && window.innerHeight <= 600 ){
        isMobile = true;
    }
    return isMobile;
  }
document.getElementById("dropdown-button-about");
function extractContent(html) {

    return new DOMParser().parseFromString(html, "index.html") . 
        documentElement . textContent;

}
