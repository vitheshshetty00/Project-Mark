import { Server, type Socket } from "socket.io";
import { JoinRoomData } from "./types/index";
import { joinRoomSchema } from "./lib/validations/JoinRoomSchema";
import { z } from "zod";
import { getRoomMembers, addUser, removeUser, getUser } from "./data/users";


const express = require("express");
const http = require('http')
const cors = require("cors");


const app = express();

app.use(cors());

const server = http.createServer(app)

const io = new Server(server)

function isRoomCreated(roomId: string) {
    return io.sockets.adapter.rooms.has(roomId)
}

function joinRoom(socket: Socket, roomId: string, username: string) {
    socket.join(roomId)
    const user = {
        id: socket.id,
        username
    }
    console.log(user)
    addUser({ ...user, roomId })
    const members = getRoomMembers(roomId)
    socket.emit('room-joined', { user, roomId, members })
    socket.to(roomId).emit('update-members', members)
    socket.to(roomId).emit('notification',{
        title:'New member Joined.',
        description:`Welcome ${username} to the room.`
    })
}

const leaveRoom = ( socket: Socket) => {
    const user=getUser(socket.id)

    if(!user) return

    const {username,roomId} = user

    removeUser(socket.id)
    const members = getRoomMembers(roomId)
    socket.to(roomId).emit('update-members', members)
    socket.to(roomId).emit('notification',{
        title:'Member Left!.',
        description: `${username} left the room.`
    })
    socket.leave(roomId)
}

function validateJoinData(socket: Socket, joinRoomData: JoinRoomData) {
    try {
        return joinRoomSchema.parse(joinRoomData)
    } catch (error) {
        if (error instanceof z.ZodError) {
            socket.emit('invalid-data', {
                message: error
            })
        }
    }
}



io.on('connection', socket => {
    socket.on('create-room', (joinRoomData: JoinRoomData) => {
        const validatedData = validateJoinData(socket, joinRoomData)
        if (!validatedData) {
            return
        }
        const { roomId, username } = validatedData
        joinRoom(socket, roomId, username)

    })
    socket.on('join-room', (joinRoomData: JoinRoomData) => {
        const validatedData = validateJoinData(socket, joinRoomData)
        if (!validatedData) {
            return
        }
        const { roomId, username } = validatedData
        if (isRoomCreated(roomId)) {
            return joinRoom(socket, roomId, username)
        }
        socket.emit('room-not-found', {
            message: "Room does'nt exist or not created yet."
        })
    })
    socket.on('leave-room', (roomId: string) => {
        leaveRoom( socket)
    })

    socket.on('disconnect', () => {
        leaveRoom(socket)
    })
})

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => console.log(`⚡️[server]: Server is running at http://localhost:${PORT} `));
