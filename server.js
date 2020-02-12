// get dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config');

// parse requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//start database connection
const databaseConnection = require('./data/database')
databaseConnection();

// listen on port 
app.listen(config.server_port, () => {
    console.info("Server is listening on port : " + config.server_port);
});

require('./routes/record')(app);  
