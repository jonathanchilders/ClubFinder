'use strict';

$(document).ready(function(){
	initializeP();
})

function initializeP() 
{
	$('#add_tag_button').click(submitC);
}

function submitC(e)
{
	e.preventDefault();
	generatePRequest();
}

function generatePRequest()
{
    if (arr[index] != null)
    {
      var tags = arr[index];
      index++;
  	var tag = 
  	{
  		'name': tags
  	}

  	var jsontag = JSON.stringify(tag);
  	console.log(jsontag);
  	$.ajax({
		url : '/tags', 
		type : 'POST', 
		data : jsontag,
		contentType : 'application/json',
		dataType: 'json',
		success: function(data) {
        		console.log('success');
                console.log(data);
        	}
		});
  }
}