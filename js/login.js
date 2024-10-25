// console.log('button clicked')

document.getElementById('login-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    console.log('Login btn click');
let mobileNumber = document.getElementById('mobile-num').value;
let pinNumber = document.getElementById('pin-num').value;
console.log(mobileNumber,pinNumber)
if(pinNumber==='1234' && mobileNumber==='5'){
    console.log('enter')
    window.location.href= '/home.html'
}
else{
    alert('Wrong password')
}
})