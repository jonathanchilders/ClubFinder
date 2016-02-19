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
	console.log("Javascript connected!");
	$('#submit').click(searchClick);
}

function searchClick(e)
{
	e.preventDefault();
	$.get("/users/", findClubs);
}

function findClubs(result)
{
	var allcookies = document.cookie;
	var cookiearray = allcookies.split(';');
	var user_email = '';

	for(var i=0; i<cookiearray.length; i++)
	{
		var name = cookiearray[i].split('=')[0];
      	var value = cookiearray[i].split('=')[1];
      	if(name == "clubbook_user_email")
      	{
      		user_email = value;
      	}
   	}

	var users = result['Users'];
	var user = users['email'];

	$.get("/clubs/", 
		function(data){
			matchUser(data, user);
		} );
}

function matchUser(result, userInfo)
{

}

