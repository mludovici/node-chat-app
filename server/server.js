const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
//const bodyParser = require('body-parser');

var app = express();

var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
//app.use(bodyParser.json());

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', generateMessage('Admin','Welcome to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin','new user joined'));

    socket.on('createMessage', (message, callback) => {
        console.log('create Message:', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('This is from the server!');
        /* socket.broadcast.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        }); */
    });

    socket.on('disconnect', () => {
        console.log('User disconnected!');
    });

    
});

server.listen(port, () => {   
    console.log(`App started at port: ${port}`);
});
