const express = require('express');
require('dotenv').config();

const routes = require('./routes');
const cors = require('cors');
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(PORT);