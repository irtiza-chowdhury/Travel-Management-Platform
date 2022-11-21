// overflow function
function overflow(){
    // e.preventDefault();
   
    var Email = document.getElementById ('Email');
    // var Phone = document.getElementById ('Phone');
    var Password = document.getElementById ('Password');
    var confirmPassword = document.getElementById ('confirmPassword');
    // var Currency = document.getElementById ('Currency');
    // var Message = document.getElementById ('Message');
    const overFlow = document.getElementById ('overFlow');
    // const Success = document.getElementById ('Success');
    // const Danger = document.getElementById ('Danger');

    if(Password.value !== confirmPassword.value  ) {
        overFlow.style.display= 'none';
        Danger.style.display= 'block';
    }
    else if(Password.value ==  "" || confirmPassword.value ==  "" || Email.value ==  "" ) {
        overFlow.style.display= 'none';
    }
    else{
        overFlow.style.display= 'inline-block';
    }
}