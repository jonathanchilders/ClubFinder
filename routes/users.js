var users = require('../users.json');

exports.getUsers = function(req, res) {
	res.json(users);
}

exports.putUsers = function(req,res){
	var data = req.body
	users = {"Users" : data};
	//users["Users"].push(data);
}