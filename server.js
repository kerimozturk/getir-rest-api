// get dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config');
// parse requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const db = require('./data/database')
console.log("db baglaniyor...");
db();
// listen on port 3000
app.listen(config.server_port, () => {
    console.log("Server is listening on port 8000");
});
console.log("ROUTE baglaniyor...");

require('./routes/record')(app);  
