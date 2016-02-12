
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('homepage');
};

exports.view = function(req, res){
  res.render('homepage', {
    'homepage_options': [
      { 'name': 'Find Clubs for You',
        'id': 'find_clubs'
      },
      { 'name': 'Browse Clubs',
        'id': 'browse_clubs'
      },
      { 'name': 'Register Your Club',
        'id': 'register'
      }
    ]
  });

};