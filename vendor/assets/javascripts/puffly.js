$(document).ready(function() {
  $('#puffly').addClass('willAppear')
  
  setTimeout(function(){
    $('#puffly').removeClass('willAppear')
  }, 3000)
});
