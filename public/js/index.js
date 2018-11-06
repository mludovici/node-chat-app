var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'Marc',
        to: 'jen@example.com',
        text: 'Hey. This is Andrew.'
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newEmail', function(email) {
    console.log('New Email', email);
});

socket.on('newMessage', function(newMessage) {
    console.log('got new Message:', newMessage);
});

