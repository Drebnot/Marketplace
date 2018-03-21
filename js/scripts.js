$(function(){
  $('form#name').submit(function(event) {
    event.preventDefault();
    var name = $('#enter-name').val();
    var description = $('#enter-description').val();
    var date = $('#enter-date').val();
    var startTime = $('#enter-start-time').val();
    var endTime = $('#enter-end-time').val();
  });

  $('.b-submit').first().click(function(){
    alert("You've successfully booked your trip!");
  });
});
