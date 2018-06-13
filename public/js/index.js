var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('New message:', message);
});

socket.on('adminText', function (adminText) {
  console.log(adminText);
});

socket.on('newUser', function (message) {
  console.log(message);
});
