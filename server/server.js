const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

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
    
    socket.on('disconnect', () => {
        console.log('User disconnected!');
    });
});

server.listen(port, () => {   
    console.log(`App started at port: ${port}`);
});
