var clubs = require('../clubs.json');

exports.getClubs = function(req, res) {
	res.json(clubs);
}

exports.postClubs = function(req,res){
	var data = req.body;
	clubs["Clubs"].push(data);
}