'use strict';

$(document).ready(function(){
	initializePage();
})

function initializePage() 
{
	$('#find_clubs').click(findClubsClick);
}

function findClubsClick(e)
{
	e.preventDefault();
	var allcookies = document.cookie;               
  var cookiearray = allcookies.split(';');
      
  for(var i=0; i<cookiearray.length; i++)
  {
    var name = cookiearray[i].split('=')[0];
    var value = cookiearray[i].split('=')[1];
    if( name == "clubbook_user_email" && value != "")
    {
      window.location.href = "/find_clubs"
    } 
    else 
    {
      window.location.href = "/login"
    }
  }
}