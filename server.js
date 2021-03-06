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
const { VERIFY_USER, USER_CONNECTED, LOGOUT, USER_DISCONNECTED,
    COMMUNITY_CHAT, MESSAGE_RECEIVED, MESSAGE_SENT, TYPING, PRIVATE_MESSAGE, NEW_CHAT_USER } = require('./socket-events');
const { createUser, createMessage, createChat } = require('./Factories');

let connectedUsers = {};
let communityChat = createChat({
    isCommunity: true
});

// const testManager = require('./socket-manager');

const SocketManager = (socket) => {
    console.log(`Socket Id: ${socket.id}`);

    let sendMessageToChatFromUser;
    let sendTypingFromUser;
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
                    name: nickname, socketId: socket.id
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
        newList[user.preferredName] = user;
        return newList;
    }

    function sendMessageToChat (sender) {
        return (chatId, message) => {
            io.emit(`${MESSAGE_RECEIVED}-${chatId}`, createMessage({message, sender}));
        }
    }

    // user connects with username

    socket.on(USER_CONNECTED, (user) => {
        user.socketId = socket.id;
        console.log('user 47', user)
        connectedUsers = addUser(connectedUsers, user);
        socket.user = user;

        sendMessageToChatFromUser = sendMessageToChat(user.preferredName);
        debugger
        sendTypingFromUser = sendTypingToChat(user.preferredName);

        io.emit(USER_CONNECTED, connectedUsers);
        console.log('connected users: ', connectedUsers);
        console.log('socket: ', socket);
    })

    //user disconnects

    socket.on('disconnect', () => {
        if ('user' in socket) {
            connectedUsers = removeUser(connectedUsers, socket.user.preferredName);
            io.emit(USER_DISCONNECTED, connectedUsers);
            console.log('disconnect: ', connectedUsers);
        }
    })

    //user logouts

    socket.on(LOGOUT, () => {
        connectedUsers = removeUser(connectedUsers, socket.user.preferredName);
        io.emit(USER_DISCONNECTED, connectedUsers);
    });

    //get community chat

    socket.on(COMMUNITY_CHAT, (cb) => {
        cb(communityChat);
    })

    socket.on(MESSAGE_SENT, ({chatId, message}) => {
        if (sendMessageToChatFromUser) sendMessageToChatFromUser(chatId, message);
    })

    socket.on(TYPING, ({chatId, isTyping}) => {
        console.log(isTyping);
        debugger
        if (sendTypingFromUser) sendTypingFromUser(chatId, isTyping);
    });

    socket.on(PRIVATE_MESSAGE, ({receiver, sender, activeChat}) => {
        if (receiver in connectedUsers) {
            let receiverSocket;
           if (!activeChat || activeChat.id === communityChat.id) {
            const newChat = createChat({ name: `${receiver}&${sender}`, users:[receiver, sender] });
            receiverSocket = connectedUsers[receiver].socketId;
            socket.to(receiverSocket).emit(PRIVATE_MESSAGE, newChat);
            socket.emit(PRIVATE_MESSAGE, newChat);
           } else {
               if (!(receiver in activeChat.users)) {
                   activeChat.users.filter(user => user in connectedUsers)
                   .map(user => connectedUsers[user])
                   .map(user => {
                       socket.to(user.socketId).emit(NEW_CHAT_USER, {chatId: activeChat.id, newUser: receiver});
                   })
                   socket.emit(NEW_CHAT_USER, { chatId: activeChat.id, newUser: receiver});
               }
               socket.to(receiverSocket).emit(PRIVATE_MESSAGE, activeChat);
           }
        }
    })

    function sendTypingToChat(user) {
        return (chatId, isTyping) => {
            io.emit(`${TYPING}-${chatId}`, {user, isTyping});
        }
    }
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
    io,
    sergey: 'potato'
};
