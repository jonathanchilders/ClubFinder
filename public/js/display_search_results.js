'use strict';

$(document).ready(function(){
	initializePage();
})

function initializePage() 
{
	$.get("/users/", 
		function(data){
			matchCookieToUser(data)
		});
	buildNavbar();
}

function matchCookieToUser(users)
{
	var allcookies = document.cookie;               
    var cookiearray = allcookies.split(';');
    var userList = users["Users"];
      
    for(var i=0; i<cookiearray.length; i++)
    {
		var name = cookiearray[i].split('=')[0];
      	var value = cookiearray[i].split('=')[1];
      	if(name == "clubbook_user_email")
      	{
      		for(var j = 0; j < userList.length; j++)
      		{
      			var user = userList[j];
      			if(user["email"] == value)
      			{
      				$.get("/clubs/", 
      					function(data){
							setClubs(data, user);
						});
      				break;
      			}
      		}
      	} 
   	}
}

function buildNavbar()
{
  var navbar_html = "";

  if(userIsLoggedIn())
  {
    navbar_html +=  '<ul> <li><a href="/">Home</a></li><li><a href="/logout">Log Out</a></li></ul>'
  }
  else
  {
    navbar_html +=  '<ul><li><a class="active" href="/">Home</a></li> <li><a href="/login">Login</a></li><li><a href="/create_profile">Create Profile</a></li></ul>'
  }
  $("#navbar").html(navbar_html);
}

function userIsLoggedIn()
{
  var allcookies = document.cookie;               
    var cookiearray = allcookies.split(';');
        
    for(var i=0; i<cookiearray.length; i++)
    {
    var name = cookiearray[i].split('=')[0];
        var value = cookiearray[i].split('=')[1];
        if(name == "clubbook_user_email")
        {
          if (value != "")
          {
            return true;
          }
        } 
    }
    return false;
}

function setClubs(clubList, user)
{
	buildPage(clubList["Clubs"], user);
}

function buildPage(clubs, currentUser)
{
	var matchList = buildMatchList(clubs, currentUser);
	matchList.sort(sortBy("matches", true, function(a){return a}));
	var pageHTML = '';
	for(var i = 0; i < matchList.length; i++)
	{
		var match = matchList[i];
		if(match["matches"] > 0)
		{
			var club = match["club"];
			var clubHTML = '<div>' + 
								'<h3>' + club["name"] + '</h3>' + 
								'<p>'+ club["description"] + '</p>' +
								'<input type=' + '"button"' + 'class=' + '"button"' +
								'onclick="window.open(' + "'" + club["url"] + "'" + "," + "'" + "_blank" + "'" +');"' + 
								'value="Learn More" />' + 
								'<hr>' + 
							'</div>';
			pageHTML += clubHTML;
		}
	}
	if(pageHTML === '')
	{
		pageHTML = '<h3>No matches found</h3>'
	}
	$("#result_list").html(pageHTML);
}

function sortBy(field, reverse, primer)
{
   var key = primer ? 
       function(x) {return primer(x[field])} : 
       function(x) {return x[field]};

   reverse = !reverse ? 1 : -1;

   return function (a, b) 
   {
       return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
   } 
}

function buildMatchList(clubs, user)
{
	var matchList = [];
	for(var i = 0; i < clubs.length; i++)
	{
		var club = clubs[i];
		var clubTags = club["tags"];
		var userTags = user["tags"];
		var result = 0;
		for(var j = 0; j < clubTags.length; j++)
		{
			var clubTag = clubTags[j];
			for(var k = 0; k < userTags.length; k++)
			{	
				var userTag = userTags[k];
				if(userTag["name"] === clubTag["name"])
				{
					result++;
				}
			}
		}
		var matchObj =
		{
			"club" : club,
			"matches" : result
		}
		matchList.push(matchObj);
	}
	return matchList;
}
