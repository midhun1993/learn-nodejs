const express = require('express');
const config = require('./config/config');
const routes = require('./routes/index');

const app = express();

app.use(express.json());
app.use('/api/v1',routes);

app.listen(config.app.port);
