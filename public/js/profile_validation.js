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
		$("#alert_box").html("<h2>Password and Confirm Password do not match</h2>");
	}
	
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