const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const http = require('http');
const socket = require('socket.io');
const config = require("config");
const client = require('./helpers/redis-client');
require('./helpers/mongoose').connect();
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(routes)

const httpServer = http.Server(app);
const io = socket(httpServer, {
    cors: {
        origin: '*',
    }
});
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('User Disconnected');
    });
});

const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => console.log('Example app listening on port:', PORT))
