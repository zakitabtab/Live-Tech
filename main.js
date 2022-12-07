var titre = document.getElementById('titre');
var btn = document.getElementById('btn');
var body = document.getElementById('body');
var services = document.getElementById('services');
// Making a scroll animation for make some dynamic for the website
window.onscroll = function(){
    if(scrollY > 294){
        titre.style.scale = '0';
        titre.style.transition = '0.5s';
    }
   else{
    titre.style.scale = '0.8';
   }

}



