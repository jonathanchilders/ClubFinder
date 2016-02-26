$(function(){ // DOM ready

  // ::: TAGS BOX
  
  $("#tags input").on({
    focusout : function() {
      var txt= this.value.replace(/[^a-z0-9\+\-\.\#]/ig,' '); // allowed characters
      if(txt) $("<span/>",{text:txt.toLowerCase(), insertBefore:this});
      this.value="";
    },
    keyup : function(ev) {
      // if: comma|enter (delimit more keyCodes with | pipe)
      if(/(188|13)/.test(ev.which))
        { 
          $(this).focusout(); 
        }
    }
  });
  $('#tags').on('click', 'span', function() {
    $(this).remove(); 
  });
});