
module.exports = (app) => {
const record = require('../controllers/record')
    

    // Create a new Product
 //   app.get('/', record.get);

    // Retrieve all Products
		console.log("APP POST Route");

    app.post('/records', record.list);
}
