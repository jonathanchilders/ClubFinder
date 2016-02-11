var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	data['Clubs'].sort(sort_by('name', false, function(a){return a.toUpperCase()}));
	res.render('browse_clubs', data);
};

var sort_by = function(field, reverse, primer){
   var key = primer ? 
       function(x) {return primer(x[field])} : 
       function(x) {return x[field]};

   reverse = !reverse ? 1 : -1;

   return function (a, b) {
       return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
   } 
}
