var tags = require('../tags.json');

exports.tags = function(req, res) {
	res.json(tags);
}