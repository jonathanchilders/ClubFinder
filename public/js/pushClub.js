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
}

function generatePostRequest()
{
	var name = $('#name').val();
	var description = $('#description').val();
	var url = $('#url').val();
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
  	var club = 
  	{
  		'name' : name,
  		'description' : description,
  		'url' : url
  	}
  	var jsonclub = JSON.stringify(club);
  	$.ajax({
		url : '/clubs', 
		type : 'POST', 
		data : jsonclub,
		contentType : 'application/json',
		dataType: 'json',
		success: function(data) {
        		console.log('success');
                console.log(data);
        	}
		});
  	windows.location.href = "/";
}