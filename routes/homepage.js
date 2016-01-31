
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
        'id': 'create_profile_button'
      },
      { 'name': 'Find Clubs for You',
        'id': 'find_club_button'
      },
      { 'name': 'Browse Clubs',
        'id': 'browse_clubs'
      },
      { 'name': 'Calendar of Events',
        'id': 'calendar_button'
      },
      { 'name': 'Register Your Club',
        'id': 'register_club_button'
      }
    ]
  });

};