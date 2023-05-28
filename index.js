const express = require('express');
const config = require('./config/config');
const routes = require('./routes/index');
const mongoose = require("mongoose");
const handleErrors = require("./middleware/error");

const app = express();
app.use(express.json());
app.use('/api/v1',routes);
app.use(handleErrors());

mongoose.connect(config.app.db.connectionString).finally(()=>{
    console.log("connected to db")
})

app.listen(config.app.port);
