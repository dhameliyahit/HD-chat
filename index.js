const express = require("express");
const http = require("http");
const socketIO = require("socket.io");


const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/public'+'/index.html');
})

io.on("connection",(socket)=>{
    console.log("User connect");

    socket.on('chat message',(msg)=>{
        io.emit('chat message',msg);
    })

    socket.on("disconnect",()=>{
        console.log("User disconnected");
    })
});




server.listen(3000,()=>{
    console.log(`Server is Running on PORT no. 3000`);
})
