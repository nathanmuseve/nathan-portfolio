// Time Set At Top[ Nav ]
setInterval(timing, 1000);
function timing(){
  let tim = new Date();
  let disp = tim.toLocaleTimeString();
  document.getElementById("clock").innerHTML = disp;
  disp.style.color = "";
};


// Open Menu on small screens 
let menu = document.getElementById("menu");
let events = document.getElementById("showMenu");

menu.addEventListener("click", function(){
    events.style.display ="block";
});


// Close menu on small screens
let close = document.getElementById("close");
let events1 = document.getElementById("showMenu");
close.addEventListener("click", function(){
    events1.style.display = "none";
});


// Form Validation
let form = document.getElementsByClassName("myForm2");
let evnt = addEventListener("submit", submt);
let nameInput = document.myform.name;
let submit = document.myform.value;

function submt(event) {
  event.preventDefault();
  document.getElementsByClassName("myForm2")[0];
  if (nameInput.value === "" || nameInput.value === null) {
    alert("Name can't be empty, plese fill in the  correct name");
    return false;
  } else {
  alert("Field entered correctly.");
    return true;
  }
};
function submt(event) {
    event.preventDefault();
    document.getElementsByClassName("myForm2")[1];
    if (nameInput.value === "" || nameInput.value === null) {
      alert("Email can't be empty, plese fill in the  correct name");
      return false;
    } else {
    alert("Email entered correctly.");
      return true;
    }
  };



// // Accordion display 
// let accord = document.querySelectorAll(".accordion");
// let y;
// let read = this.nextElementSibling;
// let btnAccord = document.getElementById("accordion");

// // add evnt to accord button 
// for(y=0; y<accord.length; y++){
//     accord[y].addEventListener("click", function(){
//         if(read.style.display === "block"){
//             read.style.display = "none";
//         } else{
//             read.style.display = "block";
//         }
//     });
// }