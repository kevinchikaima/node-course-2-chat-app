const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  // socket.emit('newEmail', {
  //   from: 'mike@example.com',
  //   text: 'What is going on.',
  //   createdAt: 123
  // });
  //
  // socket.on('createEmail', (newEmail) => {
  //   console.log('createEmail', newEmail);
  // });

  socket.emit('newMessage', {
    from: 'Abby',
    message: 'Hey',
    createdAt: 123
  });

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage', newMessage);
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

//module.exports = {app};
