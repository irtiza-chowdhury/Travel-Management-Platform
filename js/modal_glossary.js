// Get the modal
var modal = document.getElementById("myMModal");

// Get the button that opens the modal
var btn = document.getElementById("myButn");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
var MClose = document.getElementById("MClose");
MClose.onclick = function() {
  modal.style.display = "none";
}
var MCancel = document.getElementById("MCancel");
MCancel.onclick = function() {
  modal.style.display = "none";
}


// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}