

$("#formValidation").validate({
    rules:{
        password:{
            minlength: 8
        },
        confirmPassword:{
            minlength: 8
        },
        email:true,
    },
    messages:{
        password:{
            required: "Please create a strong Password",
            minlength: "At least 8 characters"
        },
        confirmPassword:{
            required: "Please create a strong Password",
            minlength: "At least 8 characters"
        },
        email:"Please enter your email",
}, 
});


// passwordCorrection function
function passwordCorrection(){
    var Email = document.getElementById ('Email');
    if(Email.value !== '' ) {
        document.getElementById("btngoPasswordchange").onclick = function () {
            location.href = "formPasswordCorrection.html";
        };
    }
}


// changePassword function
function changePassword(){
    var Password = document.getElementById ('Password');
    var confirmPassword = document.getElementById ('confirmPassword');

    if(Password.value !== confirmPassword.value  ) {
        Danger.style.display= 'block';
    }
    else if(Password.value !==  "" || confirmPassword.value !==  "" ) {
        document.getElementById("btnPasswordchange").onclick = function () {
            location.href = "formSignin.html";
        };
    } 
}