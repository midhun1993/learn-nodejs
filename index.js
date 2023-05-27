const express = require('express');
const config = require('./config/config');
const routes = require('./routes/index');

const app = express();
app.use('/api/v1',routes);
app.listen(config.app.port);
