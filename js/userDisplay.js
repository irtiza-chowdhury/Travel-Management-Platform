// show identity
// function showIdentity(){
//     document.getElementById('userIdentity').onclick = function () {
//         document.getElementById('userInfo').style.display= 'block'
//     }
// }
$("#userIdentity").on("click", function(){
    $("#userInfo").toggle(); 
  });

// close identity
// var userClose= document.getElementById ('userClose');
// var userInfo= document.getElementById ('userInfo');

// userClose.onclick = function(){
//     userInfo.style.display ='none';
// }


// show & close General settings start
$("#btnChangeGeneral").on("click", function(){
    $("#btnCancelGeneral").toggle(); 
    $("#btnSaveGeneral").toggle(); 
    $("#existingOrganisation").toggle(); 
    $("#NewOrganisationName").toggle(); 
    $("#existingAddress").toggle(); 
    $("#NewAddress").toggle(); 
    $("#btnChangeGeneral").toggle(); 
  });
$("#btnCancelGeneral").on("click", function(){
    $("#btnCancelGeneral").toggle(); 
    $("#btnSaveGeneral").toggle(); 
    $("#existingOrganisation").toggle(); 
    $("#NewOrganisationName").toggle(); 
    $("#existingAddress").toggle(); 
    $("#NewAddress").toggle(); 
    $("#btnChangeGeneral").toggle(); 
  });
$("#btnSaveGeneral").on("click", function(){
    $("#btnCancelGeneral").toggle(); 
    $("#btnSaveGeneral").toggle(); 
    $("#existingOrganisation").toggle(); 
    $("#NewOrganisationName").toggle(); 
    $("#existingAddress").toggle(); 
    $("#NewAddress").toggle(); 
    $("#btnChangeGeneral").toggle(); 
  });
// show & close General settings end


// show & close Personal settings start
$("#btnChangePersonal").on("click", function(){
    $("#btnCancelPersonal").toggle(); 
    $("#btnSavePersonal").toggle(); 
    $("#existingName").toggle(); 
    $("#NewNameFirst").toggle(); 
    $("#NewNameLast").toggle(); 
    $("#existingMail").toggle(); 
    $("#NewMail").toggle(); 
    $("#btnChangePersonal").toggle(); 
  });
$("#btnCancelPersonal").on("click", function(){
    $("#btnCancelPersonal").toggle(); 
    $("#btnSavePersonal").toggle(); 
    $("#existingName").toggle(); 
    $("#NewNameFirst").toggle(); 
    $("#NewNameLast").toggle(); 
    $("#existingMail").toggle(); 
    $("#NewMail").toggle(); 
    $("#btnChangePersonal").toggle(); 
  });
$("#btnSavePersonal").on("click", function(){
    $("#btnCancelPersonal").toggle(); 
    $("#btnSavePersonal").toggle(); 
    $("#existingName").toggle(); 
    $("#NewNameFirst").toggle(); 
    $("#NewNameLast").toggle(); 
    $("#existingMail").toggle(); 
    $("#NewMail").toggle(); 
    $("#btnChangePersonal").toggle(); 
  });
// show & close Personal settings end

// show & close language settings start
$("#btnChangeLanguage").on("click", function(){
    $("#LanguageCard").toggle(); 
  });
// show & close language settings end


// show & close Password settings start
$("#btnChangePassword").on("click", function(){
    $("#btnCancelPassword").toggle(); 
    $("#btnSavePassword").toggle(); 
    $("#existingPassword").toggle(); 
    $("#newPassword").toggle(); 
    $("#NewconfirmPassword").toggle(); 
    $("#btnChangePassword").toggle(); 
  });
$("#btnCancelPassword").on("click", function(){
    $("#btnCancelPassword").toggle(); 
    $("#btnSavePassword").toggle(); 
    $("#existingPassword").toggle(); 
    $("#newPassword").toggle(); 
    $("#NewconfirmPassword").toggle(); 
    $("#btnChangePassword").toggle(); 
  });
$("#btnSavePassword").on("click", function(){
    $("#btnCancelPassword").toggle(); 
    $("#btnSavePassword").toggle(); 
    $("#existingPassword").toggle(); 
    $("#newPassword").toggle(); 
    $("#NewconfirmPassword").toggle(); 
    $("#btnChangePassword").toggle(); 
  });
  // show & close Password settings end



// var btnChangeGeneral= document.getElementById ('btnChangeGeneral');
// var btnCancelGeneral= document.getElementById ('btnCancelGeneral');
// var btnSaveGeneral= document.getElementById ('btnSaveGeneral');
// var existingOrganisation= document.getElementById ('existingOrganisation');
// var NewOrganisationName= document.getElementById ('NewOrganisationName');
// var existingAddress= document.getElementById ('existingAddress');
// var NewAddress= document.getElementById ('NewAddress');

// btnChangeGeneral.onclick = function(){
//     btnCancelGeneral.style.display ='block';
//     btnSaveGeneral.style.display ='block';
//     existingOrganisation.style.display ='none';
//     NewOrganisationName.style.display ='block';
//     existingAddress.style.display ='none';
//     NewAddress.style.display ='block';
//     btnChangeGeneral.style.display ='none';
// }
// btnChangeGeneral.onclick = function(){
//     btnChangeGeneral.style.display ='block';
//     btnCancelGeneral.style.display ='none';
//     btnSaveGeneral.style.display ='none';
//     existingOrganisation.style.display ='block';
//     NewOrganisationName.style.display ='none';
//     existingAddress.style.display ='block';
//     NewAddress.style.display ='none';
// }

// // show & close Last name
// var btnLastname= document.getElementById ('btnLastname');
// var itemLastname= document.getElementById ('itemLastname');
// var cancelnameLast= document.getElementById ('cancelnameLast');

// btnLastname.onclick = function(){
//     itemLastname.style.display ='block';
// }
// cancelnameLast.onclick = function(){
//     itemLastname.style.display ='none';
// }

// // show & close Address
// var btnAddress= document.getElementById ('btnAddress');
// var itemAddress= document.getElementById ('itemAddress');
// var cancelAddress= document.getElementById ('cancelAddress');

// btnAddress.onclick = function(){
//     itemAddress.style.display ='block';
// }
// cancelAddress.onclick = function(){
//     itemAddress.style.display ='none';
// }

// // show & close Contact
// var btnContact= document.getElementById ('btnContact');
// var itemContact= document.getElementById ('itemContact');
// var cancelContact= document.getElementById ('cancelContact');

// btnContact.onclick = function(){
//     itemContact.style.display ='block';
// }
// cancelContact.onclick = function(){
//     itemContact.style.display ='none';
// }

// // show & close Currency
// var btnCurrency= document.getElementById ('btnCurrency');
// var itemCurrency= document.getElementById ('itemCurrency');
// var cancelCurrency= document.getElementById ('cancelCurrency');

// btnCurrency.onclick = function(){
//     itemCurrency.style.display ='block';
// }
// cancelCurrency.onclick = function(){
//     itemCurrency.style.display ='none';
// }

// // show & close Password
// var btnPassword= document.getElementById ('btnPassword');
// var itemPassword= document.getElementById ('itemPassword');
// var cancelPassword= document.getElementById ('cancelPassword');

// btnPassword.onclick = function(){
//     itemPassword.style.display ='block';
// }
// cancelPassword.onclick = function(){
//     itemPassword.style.display ='none';
// }

