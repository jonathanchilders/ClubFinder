var tags = require('../tags.json');

exports.view = function(req, res){
  res.render('find_clubs', tags);
};


