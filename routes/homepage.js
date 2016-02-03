
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('homepage');
};

exports.view = function(req, res){
  res.render('homepage', {
    'homepage_options': [
      { 'name': 'Create a Club Profile',
        'id': 'create_profile'
      },
      { 'name': 'Find Clubs for You',
        'id': 'find_clubs'
      },
      { 'name': 'Browse Clubs',
        'id': 'browse_clubs'
      },
      { 'name': 'Calendar of Events',
        'id': 'calendar'
      },
      { 'name': 'Register Your Club',
        'id': 'register'
      }
    ]
  });

};