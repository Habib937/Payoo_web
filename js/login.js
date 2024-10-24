// console.log('button clicked')

document.getElementById('login-btn')
.addEventListener('click', function(event){
    event.preventDefault();
//     console.log('Login btn clicked');
})

const mobileNumber = document.getElementById('mobile-num').value;
console.log(mobileNumber)