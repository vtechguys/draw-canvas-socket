socket.on('someoneStartedDrawing', function(data){
    someoneStartedDrawing(data);
});
socket.on('someoneElseIsDrawing', function(data){
    someoneElseIsDrawing(data);
});
socket.on('drawClickSomeone', function(data){
    mousedown = !mousedown;
});