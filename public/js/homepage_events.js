'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function(){
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() 
{
	$('#find_clubs').click(findClubsClick);
}

function findClubsClick(e)
{
	console.log("hihihihihi")
	e.preventDefault();
	var allcookies = document.cookie;               
    // Get all the cookies pairs in an array
    var cookiearray = allcookies.split(';');
      
    console.log( cookiearray );         
    // Now take key value pair out of this array
    for(var i=0; i<cookiearray.length; i++){
		var name = cookiearray[i].split('=')[0];
      	var value = cookiearray[i].split('=')[1];
      	if( name == "clubbook_user_email" && value != ""){
      		window.location.href = "/find_clubs"
      	} else {
      		window.location.href = "/login"
      	}
   	}
}

// function validateLogin(result)
// {

// 	var allcookies = document.cookie;               
//     // Get all the cookies pairs in an array
//     var cookiearray = allcookies.split(';');
      
//     console.log( cookiearray );         
//     // Now take key value pair out of this array
//     for(var i=0; i<cookiearray.length; i++){
// 		var name = cookiearray[i].split('=')[0];
//       	var value = cookiearray[i].split('=')[1];
//       	if( name == "clubbook_user_email" && value != ""){
//       		window.location.href = "/find_clubs"
//       	} else {
//       		window.locaiton.href = "/login"
//       	}
//    	}
// }

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