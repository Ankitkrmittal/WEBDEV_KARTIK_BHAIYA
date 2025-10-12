const express = require('express');
const path = require('path');
const {createServer} =require('http');
const {Server} = require('socket.io');
const { Socket } = require('dgram');
const app = express();
const httpServer = createServer(app);
const io =new Server(httpServer,{});
app.use(express.static(path.join(__dirname, 'public')));
io.on("connection",(Socket)=>{
    console.log("client connected",Socket.id);

    setInterval(()=>{
        Socket.emit('stock-price',{
            price: Math.floor(Math.random(1000)*1000)
        })
    },1000)
    Socket.on('chat',(chatdata)=>{
        console.log(chatdata);
        Socket.broadcast.emit('chat-message',chatdata)
    })
})
httpServer.listen(4444,()=>{
    console.log('http://localhost:4444')
})