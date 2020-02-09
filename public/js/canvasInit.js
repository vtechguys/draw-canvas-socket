var canvas = null;
var ctx = null;
function getScreenDimensions() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return {
    vw,
    vh
  };
}
function getContextProps() {
  return {
    color: ctx.strokeStyle,
    lineWidth: ctx.lineWidth
  };
}
function makeAndAppendCanvas() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const body = document.getElementById("draw-area");
  body.innerHTML = null;
  const canvas = document.createElement("canvas");
  canvas.setAttribute("width", vw);
  canvas.setAttribute("height", vh);
  canvas.setAttribute("id", "canvas");
  body.appendChild(canvas);
}
function initCanvas() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
}
function init() {
  makeAndAppendCanvas();
  initCanvas();
  setCtx();
  registerCanvasEvents();
}

function setCtx(drawProperties = {}) {
  const { color, lineWidth, x, y } = calcMousePosition(drawProperties);
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  return {
    x,
    y,
    color,
    lineWidth
  };
}
function clickHandler(e) {
  mousedown = !mousedown;
  socket.emit('drawClick', mousedown);

  console.log("click", mousedown);
  if (mousedown) {
    var pos = fixPosition(e, canvas);
    const drawProperties = {
      ...pos,
      screen: getScreenDimensions(),
      ...getContextProps()
    };
    iStartToDraw((drawProperties));
  }
}

function mousemoveHandler(e) {
  if (mousedown) {
    var pos = fixPosition(e, canvas);
    const drawProperties = {
      ...pos,
      screen: getScreenDimensions(),
      ...getContextProps()
    };
    iAmDrawing(drawProperties);
  }
}

function registerCanvasEvents() {
  console.log("events");
  canvas.onclick = clickHandler;
  canvas.onmousemove = mousemoveHandler;
}
window.addEventListener("resize", init);
window.addEventListener("load", init);
