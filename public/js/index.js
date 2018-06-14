var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('adminText', function (adminText) {
  console.log(adminText);
  var li = jQuery('<li></li>');
  li.text(`${adminText.from}: ${adminText.text}`);

  jQuery('#messages').append(li);
});

socket.on('newMessage', function (message) {
  console.log('New message:', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

socket.on('newUser', function (message) {
  console.log(message);

  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

socket.emit('createMessage', {
  from: 'Kevin',
  text: 'Hello there!'
}, function (data) {
  console.log('got it ', data);
});

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function () {

  });
});
