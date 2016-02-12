var tags = require('../tags.json');
var clubs = require('../clubs.json');

exports.view = function(req, res){
  res.render('register', {tags, clubs});
};