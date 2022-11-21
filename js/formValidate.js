
// formvalidation notification
$("#formValidation").validate({
    rules:{
        nameFirst:{
            minlength: 2
        },
        nameLast:{
            minlength: 2
        },
        nameOrganisation:{
            minlength: 4
        },
        password:{
            minlength: 8
        },
        confirmPassword:{
            minlength: 8
        },
        email:true,
        phone:{
            number:true,
            minlength: 10,
            maxlength: 17
           
        },
    },
    messages:{
        nameFirst:{
            required: "Please enter your first name",
            minlength: "Name at least 2 characters"
        },
        nameLast:{
            required: "Please enter your last name",
            minlength: "Name at least 2 characters"
        },
        nameOrganisation:{
            required: "Please enter your Organisation name",
            minlength: "Enter at least 4 characters"
        },
        password:{
            required: "Please create a strong Password",
            minlength: "At least 8 characters"
        },
        confirmPassword:{
            required: "Please create a strong Password",
            minlength: "At least 8 characters"
        },
        email:"Please enter your email",
        phone:"Please enter your phone number",
        address:"Please enter your address",
        // username:"Please enter a Username",
        currency: "Please select a currency",
        country: "Please enter your country",
        checkbox:"Please read and accept the Terms and Conditions and Privacy Policy to proceed.",

}, 

});
$document.ready(function(){
    $("btnNext").on('click', function (event){
        event.preventDefault();
        var el = $(this);
        el.prop('disabled',true);
        setTimeout (function(){
            el.prop('disabled',false); },3000);
    });
});