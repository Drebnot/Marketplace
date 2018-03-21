$(function(){
    // Get the modal
  $('form#checkout').submit(function(event) {
    var name = $('#name').val();
    var address = $('#address').val();

    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
    }

    $('.add-name').text(name);
    $('.add-address').text(address);

    event.preventDefault();
  });
});
