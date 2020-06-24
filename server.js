const express = require('express');
const morgan = require("morgan");
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

const { requiresAuth } = require('./utils/auth');
const schema = require('./schema');
const imageRouter = require('./routes/image-upload');

const app = express();

// SOCKET LOGIC



const http = require('http').createServer(app);

//refactor to import app into socket manager???
const io = require('socket.io')(http);
console.log('io HERE', io)
// const SocketManager = require('./socket-manager');
const { VERIFY_USER, USER_CONNECTED, LOGOUT, USER_DISCONNECTED, COMMUNITY_CHAT } = require('./socket-events');
const { createUser, createMessage, createChat } = require('./Factories');

let connectedUsers = {};
let communityChat = createChat();

const SocketManager = (socket) => {
    console.log(`Socket Id: ${socket.id}`);

    //verify username

    socket.on(VERIFY_USER, (nickname, cb) => {
        if (isUser(connectedUsers, nickname)) {
            cb({
                isUser: true,
                user: null
            });
        } else {
            cb({
                isUser: false,
                user: createUser(({
                    name: nickname
                }))
            });
        }
    });

    const isUser = (userList, username) => {
        return username in userList;
    }

    const removeUser = (userList, username) => {
        const newList = Object.assign({}, userList);
        delete newList[username];
        return newList;
    }

    const addUser = (userList, user) => {
        const newList = Object.assign({}, userList);
        newList[user.name] = user;
        return newList;
    }

    // user connects with username

    socket.on(USER_CONNECTED, (user) => {
        console.log('user 47', user)
        connectedUsers = addUser(connectedUsers, user);
        socket.user = user;
        io.emit(USER_CONNECTED, connectedUsers);
        console.log('connected users: ', connectedUsers);
        console.log('socket: ', socket);
    })

    //user disconnects

    socket.on('disconnect', () => {
        if ('user' in socket) {
            connectedUsers = removeUser(connectedUsers, socket.user.name);
            io.emit(USER_DISCONNECTED, connectedUsers);
            console.log('disconnect: ', connectedUsers);
        }
    })

    //user logouts

    socket.on(LOGOUT, () => {
        connectedUsers = removeUser(connectedUsers, socket.user.name);
        io.emit(USER_DISCONNECTED, connectedUsers);
    });

    //get community chat

    socket.on(COMMUNITY_CHAT, (cb) => {
        cb(communityChat);
    })
}

io.on('connection', SocketManager);



// END SOCKET

// use http with socket.io for private messaging



app.use(cors({ origin: true })); // make more restrictive for production

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.use('/aws', imageRouter);

// const port = process.env.PORT || 8080;



// app.use(jwtCheck);

// Define an endpoint that must be called with an access token
app.get("/api/external", requiresAuth, (req, res) => {
    res.send({
        msg: "It actually works!"
    });
});

module.exports = {
    app,
    http,
    io
};
