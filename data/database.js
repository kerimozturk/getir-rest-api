const config = require('../config');

// Connecting to the database
var mongoose = require("mongoose");

module.exports = () => {
	mongoose.connect(config.db_url, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}).then(() => {
		console.info("Successfully connected to the database");
	}).catch(err => {
		console.error('Could not connect to the database. Exiting now...', err);
		process.exit();
	});
	mongoose.Promise = global.Promise;
}
