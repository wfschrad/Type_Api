const app  = require('./server');
console.log('app in manager: ', app)
const { VERIFY_USER, USER_CONNECTED, LOGOUT, PRIVATE_MESSAGE } = require('./socket-events');
const { createUser, createMessage, createChat } = require('./Factories');

let connectedUsers = {};

module.exports = (socket) => {
    console.log(`Socket Id: ${socket.id}`);

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



    // user connects with username

    socket.on(USER_CONNECTED, (user) => {
        user.socketId = socket.id;
        console.log('user 47', user)
        connectedUsers = addUser(connectedUsers, user);
        socket.user = user;
        io.emit(USER_CONNECTED, connectedUsers);
        console.log('connected users: ', connectedUsers);
        console.log('socket: ', socket);
    })


    // OTHER FUNCTIONS IN SERVER.JS

    //user disconnects

    //user logouts
}
