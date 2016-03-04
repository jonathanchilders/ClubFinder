'use strict';

$(document).ready(function(){
  initializePage();
})

function initializePage() 
{
  $('#submit').click(submitClick);
  buildNavbar();
}

function submitClick(e)
{
  e.preventDefault();
  generatePostRequest();
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
  var x = 0;
  while (x < arr.length)
  {
    var customTags = 
    {
      'name' : arr[x]
    }
    x++;
    tags.push(customTags);
  }
    var club = 
    {
      'name' : name,
      'description' : description,
      'url' : url,
      'tags': tags
    }
    var jsonclub = JSON.stringify(club);
    console.log(jsonclub);
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
    window.location.href = "/";
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