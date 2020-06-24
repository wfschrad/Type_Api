const { app } = require('./server');
console.log('app in manager: ', app)
const { VERIFY_USER, USER_CONNECTED, LOGOUT } = require('./socket-events');
const { createUser, createMessage, createChat } = require('./Factories');

let connectedUsers = {};

module.exports = (socket) => {
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

    //user logouts
}
