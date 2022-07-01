const express = require('express');



const routes = express();

routes.post('/register');

routes.post('/login');

routes.use(verifyLogin);

routes.post('/symptoms'); //registro de pontos

module.exports = routes;