'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function(){
	initializePage();
	buildNavbar();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() 
{
	$('#logout').click(logoutClick);
}

function logoutClick(e)
{
	e.preventDefault();
	$.get("/users/", logoutUser);
}

function logoutUser(result)
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
				document.cookie = 'clubbook_user_email=' + "" + ';';
				dumpCookies();
				window.location.href = "/";
        break
			}
		}		
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