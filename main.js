var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
widthOfLine = 2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
  color = document.getElementById("color").value;
  widthOfLine = document.getElementById("widthOfLine").value;
  mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
  currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
  currentPositionOfMouseY = e.clientY - canvas.offsetTop;

  if (mouseEvent == "mousedown") {
  
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;
    console.log("Posição atual das coordenadas x e y= ");
    console.log(
      "x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY
    );
   ctx.moveTo(lastPositionOfX, lastPositionOfY);
   console.log("Utima posição das coordenadas x e y= ");
   console.log(
     "x  = " + lastPositionOfX + "y = " + lastPositionOfY
   );
   ctx.lineTo(currentPositionOfMouseX,currentPositionOfMouseY);
   ctx.stroke();
  }
  lastPositionOfX=currentPositionOfMouseX;
  lastPositionOfY=currentPositionOfMouseY;

}



function clearArea() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
