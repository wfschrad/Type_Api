const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');

app.use(cors({ origin: 'http://localhost:3000' }));


const port = process.env.PORT || 8080;

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://affinity-app.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'type_api',
    issuer: 'https://affinity-app.us.auth0.com/',
    algorithms: ['RS256']
});

// app.use(jwtCheck);

// Define an endpoint that must be called with an access token
app.get("/api/external", jwtCheck, (req, res) => {
    res.send({
        msg: "It actually works!"
    });
});

app.listen(port, () => console.log(`Now listening on port ${port}...`));