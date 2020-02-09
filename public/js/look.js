// initDraw(document.getElementById("canvas"));

// function initDraw(canvas) {
//   var element = null;

//   var mouse = {
//     x: 0,
//     y: 0,
//     startX: 0,
//     startY: 0
//   };

//   canvas.onmousemove = mouseMoveHandlerFree;
//   canvas.onclick = clickHandler;
  
//   function setMousePosition(e) {
//     var ev = e || window.event; //Moz || IE
//     if (ev.pageX) {
//       //Moz
//       mouse.x = ev.pageX + window.pageXOffset;
//       mouse.y = ev.pageY + window.pageYOffset;
//     } else if (ev.clientX) {
//       //IE
//       mouse.x = ev.clientX + document.body.scrollLeft;
//       mouse.y = ev.clientY + document.body.scrollTop;
//     }
//   }
//   function clickHandler(e) {
//     if (element !== null) {
//       element = null;
//       canvas.style.cursor = "default";
//       console.log("finsihed.");
//     } else {
//       console.log("begun.");
//       mouse.startX = mouse.x;
//       mouse.startY = mouse.y;
//       element = document.createElement("div");
//       element.className = "rectangle";
//       element.style.left = mouse.x + "px";
//       element.style.top = mouse.y + "px";
//       canvas.appendChild(element);
//       canvas.style.cursor = "crosshair";
//     }
//   }
//   function mouseMoveHandlerFree(e) {
//     setMousePosition(e);
//     if (element !== null) {
//       element.style.width = Math.abs(mouse.x - mouse.startX) + "px";
//       element.style.height = Math.abs(mouse.y - mouse.startY) + "px";
//       element.style.left =
//         mouse.x - mouse.startX < 0 ? mouse.x + "px" : mouse.startX + "px";
//       element.style.top =
//         mouse.y - mouse.startY < 0 ? mouse.y + "px" : mouse.startY + "px";
//     }
//   }
// }





















// var canvas,
//   ctx,
//   flag = false,
//   prevX = 0,
//   currX = 0,
//   prevY = 0,
//   currY = 0,
//   dot_flag = false;

// var x = "black",
//   y = 2;

// function init() {
//   canvas = document.getElementById("canvas");
//   ctx = canvas.getContext("2d");
//   w = canvas.width;
//   h = canvas.height;

//   canvas.addEventListener(
//     "mousemove",
//     function(e) {
//       findxy("move", e);
//     },
//     false
//   );
//   canvas.addEventListener(
//     "mousedown",
//     function(e) {
//       findxy("down", e);
//     },
//     false
//   );
//   canvas.addEventListener(
//     "mouseup",
//     function(e) {
//       findxy("up", e);
//     },
//     false
//   );
//   canvas.addEventListener(
//     "mouseout",
//     function(e) {
//       findxy("out", e);
//     },
//     false
//   );
// }

// function color(obj) {
//   switch (obj.id) {
//     case "green":
//       x = "green";
//       break;
//     case "blue":
//       x = "blue";
//       break;
//     case "red":
//       x = "red";
//       break;
//     case "yellow":
//       x = "yellow";
//       break;
//     case "orange":
//       x = "orange";
//       break;
//     case "black":
//       x = "black";
//       break;
//     case "white":
//       x = "white";
//       break;
//   }
//   if (x == "white") y = 14;
//   else y = 2;
// }

// function draw() {
//   ctx.beginPath();
//   ctx.moveTo(prevX, prevY);
//   ctx.lineTo(currX, currY);
//   ctx.strokeStyle = x;
//   ctx.lineWidth = y;
//   ctx.stroke();
//   ctx.closePath();
// }

// function erase() {
//   var m = confirm("Want to clear");
//   if (m) {
//     ctx.clearRect(0, 0, w, h);
//     document.getElementById("canvasimg").style.display = "none";
//   }
// }

// function save() {
//   document.getElementById("canvasimg").style.border = "2px solid";
//   var dataURL = canvas.toDataURL();
//   document.getElementById("canvasimg").src = dataURL;
//   document.getElementById("canvasimg").style.display = "inline";
// }

// function findxy(res, e) {
//   if (res == "down") {
//     prevX = currX;
//     prevY = currY;
//     currX = e.clientX - canvas.offsetLeft;
//     currY = e.clientY - canvas.offsetTop;

//     flag = true;
//     dot_flag = true;
//     if (dot_flag) {
//       ctx.beginPath();
//       ctx.fillStyle = x;
//       ctx.fillRect(currX, currY, 2, 2);
//       ctx.closePath();
//       dot_flag = false;
//     }
//   }
//   if (res == "up" || res == "out") {
//     flag = false;
//   }
//   if (res == "move") {
//     if (flag) {
//       prevX = currX;
//       prevY = currY;
//       currX = e.clientX - canvas.offsetLeft;
//       currY = e.clientY - canvas.offsetTop;
//       draw();
//     }
//   }
// }
