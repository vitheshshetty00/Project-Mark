import { Server, type Socket } from "socket.io";
import { JoinRoomData } from "./types/index";
import { nanoid } from "nanoid";

const express = require("express");
const http = require('http')
const cors = require("cors");


const app = express();

app.use(cors());

const server = http.createServer(app)

const io = new Server(server)

function isRoomCreated(roomId:string){
     return io.sockets.adapter.rooms.has(roomId)
}

function joinRoom(socket: Socket, roomId: string, username: string) {
    socket.join(roomId)
    const user = {
        id: nanoid(),
        username
    }
    console.log(user)
    socket.emit('room-joined', { user, roomId })
}

io.on('connection', socket => {
    socket.on('create-room', ({ roomId, username }: JoinRoomData) => {
        joinRoom(socket, roomId, username)

    })
    socket.on('join-room', ({ roomId, username }: JoinRoomData) => {
        if(isRoomCreated(roomId)){
            return joinRoom(socket, roomId, username)
        }
        socket.emit('room-not-found',{
            message:"Room does'nt exist or not created yet."
        })
    })
})

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => console.log(`⚡️[server]: Server is running at http://localhost:${PORT} `));
