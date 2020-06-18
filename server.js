const express = require('express');
const morgan = require("morgan");

const app = express();
const { requiresAuth } = require('./utils/auth');

const cors = require('cors');

app.use(cors({ origin: 'http://localhost:3000' }));


const port = process.env.PORT || 8080;



// app.use(jwtCheck);

// Define an endpoint that must be called with an access token
app.get("/api/external", requiresAuth, (req, res) => {
    res.send({
        msg: "It actually works!"
    });
});

module.exports = app;