var tags = require('../tags.json');

exports.view = function(req, res){
	tags['Tags'].sort(sort_by('name', false, function(a){return a.toUpperCase()}));
  	res.render('find_clubs', tags);
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