// onclick listner
// function oneTimeListener(node, type, callback) {
//     // create event
//     node.addEventListener(type, function listener(e) {

//         // remove event listener
//         e.target.removeEventListener(e.type, listener);

//         // call handler with original context 
//         return callback.call(this, e); 

//     });
// }

// let btnNext = document.getElementById('btnNext');
// function onClick(event){
//    console.log(event, this);
// }
// oneTimeListener(btn, 'click', onClick);

// let btnNext = document.getElementById('btnNext');
// function onClick(event){
//     btnNext.removeEventListener('click', onClick);
//    console.log("Event fired once, no more click will be handled");
// }

// btn.addEventListener('click', onClick);

// $document.ready(function(){
//     $("btnNext").on('click', function (event){
//         event.preventDefault();
//         var el = $(this);
//         el.prop('disabled',true);
//         setTimeout (function(){
//             el.prop('disabled',false); },3000);
//     });
// });



//Got to personalinfo
function Parsonalinfo(){
    var nameOrganisation = document.getElementById ('nameOrganisation');
    var Email = document.getElementById ('Email');
    var Currency = document.getElementById ('Currency');
    // var btnNext = document.getElementById ('btnNext');

    if( nameOrganisation.value == '' || Email.value ==  "" || Currency.value == '' ) {
        overFlow.style.display= 'inline-block';
    }
    else{
        btnNext.onclick = function () {
            location.href = "formPersonalinfo.html";
        };
    }
}




