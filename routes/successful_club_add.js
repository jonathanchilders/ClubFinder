var clubs = require('../clubs.json');

exports.addClub = function(req, res){
  res.render('successful_club_add');

  var name = req.query.name;
  console.log(name);
  var description = req.query.description;
  console.log(description);
  var url = req.query.url;
  console.log(url);

  var newClub = 
  {
  	'name' : name,
  	'description' : description,
  	'url' : url
  }

  console.log(newClub);

  clubs['Clubs'].push(newClub);
};