module.exports = {
    environment: process.env.NODE_ENV || "development",
    port: process.env.PORT || 8080,
    socketPort: process.env.SOCK_PORT || 8081,
    db: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
    },
};
