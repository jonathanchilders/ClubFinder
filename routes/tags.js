var tags = require('../tags.json');

exports.getTags = function(req, res) {
	res.json(tags);
}

exports.postTags = function(req, res){
	var data = req.body;
	tags['Tags'].push(data);
}