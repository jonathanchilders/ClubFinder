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
	$('#submit').click(loginClick);
}

function loginClick(e)
{
	e.preventDefault();
	$.get("/users/", validateLogin);
}

function validateLogin(result)
{
	var users = result["Users"];
	var email = $('#email').val();
	var password = $('#password').val();
	var validLogin = false;
	for(var i = 0; i < users.length; i++)
	{
		var user = users[i];

		if(user['email'] === email)
		{
			//TODO: Fix this to use a salted hash for password verification
			if(user['password'] === password)
			{
				document.cookie = 'clubbook_user_email=' + email + ';';
				dumpCookies();
				window.location.href = "/";
				validLogin = true;
			}
		}		
	}
	if(!validLogin)
	{
		$("#alert_box").html("<h2>Invalid Credentials</h2>");
	}

}

function dumpCookies()
{
	var allcookies = document.cookie;
    console.log ("All Cookies : " + allcookies );
               
    // Get all the cookies pairs in an array
    var cookiearray = allcookies.split(';');
               
    // Now take key value pair out of this array
    for(var i=0; i<cookiearray.length; i++){
		var name = cookiearray[i].split('=')[0];
      	var value = cookiearray[i].split('=')[1];
      	console.log ("Key is : " + name + " and Value is : " + value);
   	}
}