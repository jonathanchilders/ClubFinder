var clubs = require('../clubs.json');

exports.view = function(req, res){
	
	res.render('search_results', clubs);
};
