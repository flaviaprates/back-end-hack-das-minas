const express = require('express');

const { registerUser, currentUserData } = require('./controllers/users')
const { login } = require('./controllers/login');
const verifyToken = require('./filters/verify-token');
const { registerUserInformation, currentUserInformation } = require('./controllers/calendar-information');
const { registerPoints, currentPoints } = require('./controllers/points');

const routes = express();

routes.post('/register/user', registerUser);

routes.post('/login', login);

routes.use(verifyToken);

routes.get('/user', currentUserData);

routes.post('/register/info', registerUserInformation);
routes.get('/info', currentUserInformation);

routes.put('/register/points', registerPoints);
routes.get('/points', currentPoints);

module.exports = routes;