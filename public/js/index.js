var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  // socket.emit('createEmail', {
  //   to: 'jen@email.com',
  //   text: 'Sounds good!'
  // });

  socket.emit('createMessage', {
    from: 'Kevin',
    text: 'Hello'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

// socket.on('newEmail', function (email) {
//   console.log('New Email', email);
// });

socket.on('newMessage', function (message) {
  console.log('New message:', message);
});
