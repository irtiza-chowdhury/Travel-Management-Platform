const toggleButton = document.getElementById ('toggleButton');
const payMonthly = document.getElementById ('payMonthly');
const payYearly = document.getElementById ('payYearly');
const monthlyPayment = document.getElementById ('monthlyPayment');
const yearlyPayment = document.getElementById ('yearlyPayment');
toggleButton.onclick = function(){
    toggleButton.classList.toggle ('active');
    payMonthly.classList.toggle ('active');
    payYearly.classList.toggle ('active');
    monthlyPayment.classList.toggle ('active');
    yearlyPayment.classList.toggle ('active');
}
