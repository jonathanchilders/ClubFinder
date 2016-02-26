'use strict';

$(document).ready(function(){
	initializePage();
})

function initializePage() 
{
	document.cookie = 'clubbook_user_email=' + "" + ';';
  buildNavbar();
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