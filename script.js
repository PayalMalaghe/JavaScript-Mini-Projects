
const body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = "turquoise";

function setColour(color){

   body.style.backgroundColor =color;
}

function setRandomColour(){
    const red = Math.floor(Math.random()*256);
    const green =Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    const randomColor = `rgb(${red},${green},${blue})`;
    body.style.backgroundColor= randomColor;
}