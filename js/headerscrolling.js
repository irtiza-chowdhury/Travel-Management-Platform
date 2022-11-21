// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("Header").style.padding = "0 10px";
    document.getElementById("logoTitle").style.width = "30px";
    document.getElementById("optionItemPrice").style.fontSize = "14px";
    document.getElementById("optionItemResource").style.fontSize = "14px";
    document.getElementById("optionItemCompany").style.fontSize = "14px";
    document.getElementById("logoTitleMobile").style.width = "30px";
    document.getElementById("userIdentity").style.width = "35px";
    
  } else {
    document.getElementById("Header").style.padding = "3px 20px";
    document.getElementById("logoTitle").style.width = "50px";
    document.getElementById("optionItemPrice").style.fontSize = "16px";
    document.getElementById("optionItemResource").style.fontSize = "16px";
    document.getElementById("optionItemCompany").style.fontSize = "16px";
    document.getElementById("logoTitleMobile").style.width = "50px";
    document.getElementById("userIdentity").style.width = "50px";
  }
}
