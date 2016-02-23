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
	var current_user = matchCookieToUser(users);
	var tags = [];
	$('.interest_box').each(function () {
		if(this.checked)
		{
			var newTag = 
  			{
  				'name' : $(this).attr('value')
  			}
			tags.push(newTag); 
		}
  	});
  	var tagObject = 
  	{
  		'tags' : tags
  	}

	var userData = generatePostRequestData(users, current_user, tags);
	$.ajax({
		url : '/users', 
		type : 'PUT', 
		data : userData,
		contentType : 'application/json',
		dataType: 'json',
		success: function(data) {
        		console.log('success');
                console.log(data);
        	}
		});

	window.location.href = "/search_results"
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

   	window.alert("User Not Found");
}

function generatePostRequestData(userList, user, tags)
{
	var user_object = 
	{
		'name' : user['name'],
		'email' : user['email'],
		'password' : user['password'],
		tags 
	}
	
	var resultList = userList;
	for(var i = 0; i < userList.length; i++)
	{
		if(userList[i] === user)
		{
			resultList[i] = user_object;
		}
	}
	var jsonList = JSON.stringify(resultList);
	
	return jsonList;
}