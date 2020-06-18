const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const requiresAuth = jwt({
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

module.exports = {
    requiresAuth
}