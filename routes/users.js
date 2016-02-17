var users = require('../users.json');

exports.users = function(req, res) {
	res.json(users);
}