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
	if(!formContainsEmptyBoxes(name, email, password))
	{
		if(emailIsValid(email))
		{
			if(emailIsUnused(data["Users"], email))
			{
				if(passwordMatchesConfirmPassword(password, confirmPassword))
				{
					makePostRequest(name, email, password);
					window.location.href = "/login";
				}
			}
		}
	}
}

function formContainsEmptyBoxes(name, email, password)
{
	if(name != "" && email != "" && password != "")
	{
		return false;
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
		return true;
	}
}

function emailIsValid(email)
{
	if(email.indexOf("@") != -1)
	{
		return true;
	}
	$("#alert_box").html("<h2>Email is not valid</h2>");
	return false;
}

function emailIsUnused(users, email)
{
	for(var i = 0; i < users.length; i++)
	{	
		var user = users[i];
		if(user["email"] === email)
		{
			$("#alert_box").html("<h2>Email is already in use</h2>");
			return false;
		}
	}	
	return true;
}

function passwordMatchesConfirmPassword(password, confirmPassword)
{
	if(password === confirmPassword)
	{
		return true;
	}
	$("#alert_box").html("<h2>Password And Confirm Password Do Not Match</h2>");
	return false;
}

function makePostRequest(name, email, password)
{
	var user = 
	{
		"name": name,
		"email": email,
		"password": password
	}
	var userData = JSON.stringify(user);
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



