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
	//TODO: Sort clubs here
	var pageHTML = '';
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
	$("#result_list").html(pageHTML);
}

