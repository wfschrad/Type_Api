const express = require('express');
const morgan = require("morgan");
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

const { requiresAuth } = require('./utils/auth');
const schema = require('./schema');

const app = express();

app.use(cors({ origin: true })); // make more restrictive for production

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

// const port = process.env.PORT || 8080;



// app.use(jwtCheck);

// Define an endpoint that must be called with an access token
app.get("/api/external", requiresAuth, (req, res) => {
    res.send({
        msg: "It actually works!"
    });
});

module.exports = app;