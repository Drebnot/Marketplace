$(function(){
  $('form#text-form').submit(function(event){
    event.preventDefault();
    var name = $('text-input').val();
    var food = $("input:radio[name=food]:checked").val();
    var music = $("#music").val();
    var favoriteColor = $("#color").val();
    $('body').css('background-color', favoriteColor);
  });
});
