var mousedown = false;
function iStartToDraw(props){
  socket.emit('iStartedDrawing', props);
  ctx.beginPath();
  ctx.moveTo(props.x, props.y);
}
function someoneStartedDrawing(props){
  mousedown = true;
  ctx.beginPath();
  ctx.moveTo(props.x, props.y);
}
function iAmDrawing(props){
  socket.emit('iAmDrawing', props);
  ctx.lineTo(props.x, props.y);
  ctx.stroke();
}
function someoneElseIsDrawing(props){
  const { vw, vh } = getScreenDimensions();
  console.log(props.x, props.y)

  props.x = Math.floor((props.x / props.screen.vw) * vw) ;
  props.y = Math.floor((props.y  / props.screen.vh) * vh );
  console.log(props.x, props.y)
  ctx.lineTo(props.x, props.y);
  ctx.stroke();
}