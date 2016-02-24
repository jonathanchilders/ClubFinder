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
      		for(var i = 0; i < userList.length; i++)
      		{
      			var user = userList[i];
      			if(user["email"] == value)
      			{
      				$.get("/clubs/", 
      					function(data){
							setClubs(data, user);
						});
      			}
      		}
      	} 
   	}
}

function setClubs(clubList, user)
{
	buildPage(clubList["Clubs"], user);
}

function buildPage(clubs, currentUser)
{
	var matchList = buildMatchList(clubs, currentUser);
	matchList.sort(sortBy("matches", false, function(a){return a}));
	console.log(matchList);
	/*var pageHTML = '';
	for(var i = 0; i < clubs.length; i++)
	{
		var club = clubs[i];
		var clubHTML = '<div>' + 
							'<h3>' + club["name"] + '</h3>' + 
							'<p>'+ club["description"] + '</p>' +
							'<input type=' + '"button"' + 'class=' + '"button"' +
							'onclick="location.href=' + "'" + club["url"] + "'" + ';"' + 
							'value="Learn More" />' + 
							'<hr>' + 
						'</div>';
		pageHTML += clubHTML;
	}
	$("#result_list").html(pageHTML);*/
}

var sortBy = function(field, reverse, primer)
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
		var club_tags = club["tags"];
		var result = 0;
		for(var j = 0; j < club_tags; j++)
		{
			if($.inArray(club_tags[j], user["tags"]))
			{
				result++;
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
