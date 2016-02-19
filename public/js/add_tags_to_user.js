'use strict';

$(document).ready(function(){
	initializePage();
})

function initializePage() 
{
	$('#submit').click(submitClick);
}

function submitClick(e)
{
	e.preventDefault();
	$.get("/users/", addTags);
}

function addTags(result)
{
	var users = result['Users'];
	var current_user_email = matchCookieToUser(users);
	var tags = [];
	$('.interest_box').each(function () {
		if(this.checked)
		{
			console.log($(this).attr('value'));
			var newTag = 
  			{
  				'name' : $(this).attr('value')
  			}
			tags.push(newTag); 
		}
  	});
	console.log(tags);
	var jsonTags = JSON.stringify(tags);
	console.log(jsonTags);
}

function matchCookieToUser(users)
{
	var allcookies = document.cookie;               
    var cookiearray = allcookies.split(';');
      
    for(var i=0; i<cookiearray.length; i++)
    {
		var name = cookiearray[i].split('=')[0];
      	var value = cookiearray[i].split('=')[1];
      	if(name == "clubbook_user_email")
      	{
      		for(var i = 0; i < users.length; i++)
      		{
      			var user = users[i];
      			if(user["email"] == value)
      			{
      				return user;
      			}
      		}
      	} 
   	}
}