const screen = {};
function screenRatioChange(w, h){
    screen.vw = w;
    screen.vh = h;
}
function makeAndAppendCanvas(){
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    screenRatioChange(w, h);

    const body = document.getElementById('draw-area');
    body.innerHTML = null;
    const canvas = document.createElement('canvas');
    canvas.setAttribute('width',  vw);
    canvas.setAttribute('height', vh);
    canvas.setAttribute('id', 'canvas');
    body.appendChild(canvas);
    draw();

}

function draw() {
  var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"); // get 2D context
  /*********** draw image *************/
 
  /*********** handle mouse events on canvas **************/
  var mousedown = false;
  ctx.strokeStyle = "#0000FF";
  ctx.lineWidth = 5;

  canvas.onclick = function(e){
      mousedown = !mousedown;
  }
 

  canvas.onmousemove = function(e) {
    var pos = fixPosition(e, canvas);
    // coord.innerHTML = '(' + pos.x + ',' + pos.y + ')';
    if (mousedown) {
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    }
  };

//   canvas.onmouseup = function(e) {
//     mousedown = false;
//   };



window.addEventListener('load', makeAndAppendCanvas);
window.addEventListener('resize', makeAndAppendCanvas);