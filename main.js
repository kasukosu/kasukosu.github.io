
var count=0;
var logo_svg = document.querySelectorAll("#logo_svg path");

  for(let i = 0; i<logo_svg.length; i++){
      console.log(`LETTER ${i} is ${logo_svg[i].getTotalLength()}`);
  }

function openMenu(){
    console.log('clicked');
    var element = document.getElementById("menu");
    var x = document.getElementById("menu-button-txt");
    var square = document.getElementById("square");

    element.classList.toggle("open");
    square.classList.toggle("square-open");

    if (x.innerHTML === "Open :)") {
        x.innerHTML = "Close :(";
    } else {
        x.innerHTML = "Open :)";
    }
}
function openMenuPlus(){
    console.log('clicked');
    var element = document.getElementById("menu");
    var x = document.getElementById("menu-button-txt");
    var square = document.getElementById("square");

    element.classList.toggle("open");
    square.classList.toggle("square-open");

}

function hoverArrow(){
    const arrow = document.getElementById('arrow-up');
}

function hoverPhone(){
    const phone = document.getElementById('phone');
    phone.classList.toggle("active");

}
function hoverCat(){
    const cat = document.getElementById('cat');
    cat.classList.toggle("active");

}
function randomize() {
    document.getElementById('picture').style.background = randomColors();
  }
  
 
  function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  function drawKoala() {
    const head = document.getElementById('head');
    const left_ear = document.getElementById('left_ear');
    const right_ear = document.getElementById('right_ear');
    const left_inner_ear = document.getElementById('left_inner_ear');
    const right_inner_ear = document.getElementById('right_inner_ear');
    const left_eye = document.getElementById('left_eye');
    const right_eye = document.getElementById('right_eye');
    const left_inner_eye = document.getElementById('left_inner_eye');
    const right_inner_eye = document.getElementById('right_inner_eye');
    const nose = document.getElementById('nose');
    console.log(count);

    if(count==0){
        head.style.visibility = "visible";


    }
    else if(count==1){
        left_ear.style.visibility = "visible";
        right_ear.style.visibility = "visible";

    }
    else if(count==2){
        left_inner_ear.style.visibility = "visible";
        right_inner_ear.style.visibility = "visible";    
    }
    else if(count==3){
        left_eye.style.visibility = "visible";
        right_eye.style.visibility = "visible";    
    }
    else if(count==4){
        left_inner_eye.style.visibility = "visible";
        right_inner_eye.style.visibility = "visible";    
    }
    else if(count==5){
        nose.style.visibility = "visible";
    }
    
    return count++;
  }

  