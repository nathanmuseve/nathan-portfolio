let menu = document.getElementById("menu");
let events = document.getElementById("showMenu");

menu.addEventListener("click", function(){
    if(events.style.display==="block"){
        events.style.display = "none";
    } else{
        events.style.display = "block";
    }
});