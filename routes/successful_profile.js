var users = require('../users.json');

exports.addUser = function(req, res){
  res.render('successful_profile');

  var name = req.query.name;
  var email = req.query.email;
  var password = req.query.password;


  var newUser = 
  {
  	'name' : name,
  	'email' : email,
  	'password' : password,
  }

  users['Users'].push(newUser);
  console.log(users);

};