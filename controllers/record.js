 const record  = require('../models/record');

// Retrieve all products from the database.
exports.get = (req, res) => {
        console.log("GETTT");
};


exports.list= (req, res) => {
	console.log("POSTT");
	const payload = req.body;

		// Check Request Body Keys
		if (!payload.minCount || !payload.maxCount || !payload.startDate || !payload.endDate) {
			return res.status(400).send({
				code: 1,
				msg: 'Body should be contian startDate, endDate, minCount, maxCount Key',
			})
		}
		// Get Request Body Key for variable
		const startDate = new Date(req.body.startDate)
		const endDate = new Date(req.body.endDate)
		const minCount = payload.minCount;
		const maxCount = payload.maxCount;

		if (minCount > maxCount) {
			return res.status(400).send({
				code: 1,
				msg: 'Min Count should be less than Max Count',
			})
		}

		if (typeof minCount !== 'number') {
			return res.status(400).send({
				code: 1,
				msg: 'Min Count should be Number',
			})
		}

		if (typeof maxCount !== 'number') {
			return res.status(400).send({
				code: 1,
				msg: 'Max Count should be Number',
			})
		}

		record.aggregate([
			{
				$match: {
					$and: [ { "createdAt": { $gte: startDate } }, { "createdAt": { $lte: endDate } } ]
				},
			},
			{
				$project: {
						key: 1, createdAt: 1, _id: 0,
						totalCount: {$sum: '$counts'},
				}
			},
			{
				$match: {
						$and: [ { "totalCount": { $gte: minCount } }, { "totalCount": { $lte: maxCount } } ]
				}
			}
		], (err, result) => {
			if (err) {
				console.error(`[RECORD CONTROLLER] ${err}`);

				return res.status(500).send(
					{
						msg: `${err}`,
						code: 1
					}
				);
			}
			return res.status(200).send({record: result, code: 0, msg: 'success'})
		});
};

