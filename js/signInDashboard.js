// sign into dashboard
function signIn(){
    var Email = document.getElementById ('Email');
    var knownPassword = document.getElementById ('knownPassword');
    
    if( Email.value !== '' || knownPassword.value !==  ""){
        document.getElementById("btnSignIN").onclick = function () {
            location.href = "dashboard.html";
        };
    }

}