var clubs = require('../clubs.json');

exports.clubs = function(req, res) {
	res.json(clubs);
}