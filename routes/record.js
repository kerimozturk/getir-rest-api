
module.exports = (app) => {
	const record = require('../controllers/record')
        const url = require('../constants/api_url.js');	
	
	// HTTP Post Method
	app.post(url.RECORDS, record.list);
}
