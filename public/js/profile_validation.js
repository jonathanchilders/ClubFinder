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
	var name = $("#name").val();
	var email = $("#email").val();
	var password = $("#password").val();
	var confirmPassword = $("#confirm_password").val();

	$.get('/users', function(data){
			validateCredentials(data, name, email, password, confirmPassword);
		});
}

function validateCredentials(data, name, email, password, confirmPassword)
{
	if(name != "" && email != "" && password != "")
	{
		if(email.indexOf("@") != -1)
		{
			if(emailUnused(data["Users"], email))
			{
				if(password === confirmPassword)
				{
					var user = 
					{
						"name": name,
						"email": email,
						"password": password
					}
					makePostRequest(JSON.stringify(user));
					window.location.href = "/login";
				}
				else
				{
					$("#alert_box").html("<h2>Password And Confirm Password Do Not Match</h2>");
				}
			}
			else
			{
				$("#alert_box").html("<h2>Email is already in use</h2>");
			}
		}
		else
		{
			$("#alert_box").html("<h2>Email is not valid</h2>");
		}
	}
	else
	{
		if(password === "")
		{
			$("#alert_box").html("<h2>Password cannot be empty<h2>");		
		}
		if(email === "")
		{
			$("#alert_box").html("<h2>Email cannot be empty<h2>");
		}	
		if(name === "")
		{
			$("#alert_box").html("<h2>Username cannot be empty<h2>");
		}
	}
}

function emailUnused(users, email)
{
	for(var i = 0; i < users.length; i++)
	{	
		var user = users[i];
		if(user["email"] === email)
		{
			return false;
		}
	}
	return true;
}

function makePostRequest(userData)
{
	$.ajax({
			url : '/users', 
			type : 'POST', 
			data : userData,
			contentType : 'application/json',
			dataType: 'json',
			success: function(data) {
	        		console.log('success');
	                console.log(data);
	        	}
			});
}



