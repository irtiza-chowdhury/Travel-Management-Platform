
//Got to createPassword
function createPassword(){
    var NameFirst = document.getElementById ('NameFirst');
    var NameLast = document.getElementById ('NameLast');
    var Address = document.getElementById ('Address');
    var Phone = document.getElementById ('Phone');
    var Country = document.getElementById ('Country');
  
    if( NameFirst.value == '' || NameLast.value ==  "" || Address.value == ''|| Phone.value == '' || Country.value == '' ) {
        overFlow.style.display= 'inline-block';
    }
    else{
        document.getElementById("btnPassword").onclick = function () {
            location.href = "formPassword.html";
        };
    }
}