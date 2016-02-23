'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function(){
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
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
	console.log(currentUser);
	console.log(clubs);
}

