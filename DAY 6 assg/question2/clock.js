
// clock()
const ctime = document.getElementById('time');
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}
setInterval(clock,1000);

//Enter the title to display
const name = prompt("Enter your name","Subbu");
title.innerText += `welcome to lets upgrade ${name}`

//Dark mode

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}


