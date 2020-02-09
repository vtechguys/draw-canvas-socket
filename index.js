var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html');
});
const PORT = process.env.PORT || 4500
server.listen(PORT);
console.log('\n\n', PORT);
io.on('connection', function (socket) {
  socket.on('iStartedDrawing', function (data) {
    socket.broadcast.emit('someoneStartedDrawing', data);
  });
  socket.on('drawClick', function (data) {
    socket.broadcast.emit('drawClickSomeone', data);
  });
  socket.on('iAmDrawing', function (data) {
    socket.broadcast.emit('someoneElseIsDrawing', data);
  });
});
