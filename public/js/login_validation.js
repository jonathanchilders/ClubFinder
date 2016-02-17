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
	$('.submit').click(loginClick);
}

function loginClick(e)
{
	e.preventDefault();
	var users = JSON.parse('../../users.json');
	var email = $(('.email').text()).trim();
	var password = $(('.password').text()).trim();

	for(var user in users)
	{
		if(user['email'] === email)
		{
			//TODO: Fix this to use a salted hash for password verification
			if(user['password'] === password)
			{
				document.cookie = 'clubbook_user_email=' + email + ';';
				dumpCookies();
				$('.submit').event = "location.href='/';";
			}
			else
			{
				$(".user_password").text("Invalid Password");
				$('.submit').event = "location.href='/login';";
			}
		}
		else
		{
			$(".user_password").text("Invalid Email");
			$('.submit').event = "location.href='/login';";

		}
	}
}

function dumpCookies()
{
	var allcookies = document.cookie;
    console.log ("All Cookies : " + allcookies );
               
    // Get all the cookies pairs in an array
    cookiearray = allcookies.split(';');
               
    // Now take key value pair out of this array
    for(var i=0; i<cookiearray.length; i++){
		name = cookiearray[i].split('=')[0];
      	value = cookiearray[i].split('=')[1];
      	console.log ("Key is : " + name + " and Value is : " + value);
   	}
}